import emitter from "@/methods/emitter";

const pushMsgStatus = {
  msgNotice(res, title = "更新") {
    if (res.data.success) {
      emitter.emit("push-message", {
        style: "success",
        title: `已${title}成功`,
      });
    } else {
      //統一格式message為字串
      const message =  typeof res.data.message === 'string' ? [res.data.message] : res.data.message
      emitter.emit("push-message", {
        style: "danger",
        title: `${title}失敗`,
        content: message.join("、"),
      });
    }
  },
};

export default pushMsgStatus;
