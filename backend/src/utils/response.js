/**
 * 統一 API 回應格式
 */
const success = (data = null, message = '操作成功') => {
  return {
    success: true,
    data,
    message
  };
};

const error = (message = '操作失敗', statusCode = 500) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
};

const errorResponse = (message = '操作失敗') => {
  return {
    success: false,
    data: null,
    message
  };
};

export {
  success,
  error,
  errorResponse
};
