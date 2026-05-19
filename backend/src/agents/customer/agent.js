import { Agent } from '@mariozechner/pi-agent-core';
import { query } from '../../config/database.js';
import { kimiModel } from '../registry.js';
import { menuSearchTool } from './skills/menuSearch.js';
import { allergenCheckTool } from './skills/allergenCheck.js';
import { recommendTool } from './skills/recommend.js';
import { orderStatusTool } from './skills/orderStatus.js';

const SYSTEM_PROMPT = `你是「拉麵職人」的專屬點餐助理，親切友善、熟悉店內每一道菜。
你只能存取菜單資訊與顧客自己的訂單，不涉及其他資料。
請用繁體中文回答，語氣自然溫暖。
可使用工具搜尋菜單、推薦料理、查詢過敏原或確認訂單狀態。`;

const TOOLS = [menuSearchTool, allergenCheckTool, recommendTool, orderStatusTool];

// sessionId → Agent instance
const sessions = new Map();

const loadSession = async (sessionId) => {
  const rows = await query(
    "SELECT messages FROM agent_sessions WHERE session_id = ? AND role = 'customer'",
    [sessionId]
  );
  return rows[0] ? JSON.parse(rows[0].messages) : null;
};

const saveSession = async (sessionId, messages) => {
  await query(
    `INSERT INTO agent_sessions (session_id, role, messages)
     VALUES (?, 'customer', ?)
     ON DUPLICATE KEY UPDATE messages = VALUES(messages), updated_at = CURRENT_TIMESTAMP`,
    [sessionId, JSON.stringify(messages)]
  );
};

export const getCustomerAgent = async (sessionId) => {
  if (sessions.has(sessionId)) return sessions.get(sessionId);

  const agent = new Agent({
    initialState: {
      systemPrompt: SYSTEM_PROMPT,
      model: kimiModel,
      tools: TOOLS,
    },
    getApiKey: async () => process.env.MOONSHOT_API_KEY || '',
  });

  const saved = await loadSession(sessionId);
  if (saved) agent.state.messages = saved;

  sessions.set(sessionId, agent);
  return agent;
};

export const persistCustomerSession = async (sessionId) => {
  const agent = sessions.get(sessionId);
  if (agent) await saveSession(sessionId, agent.state.messages);
};
