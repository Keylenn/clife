import Button, {MuiButtonProps} from "./Button";
import CallApp from "callapp-lib";

interface Props extends MuiButtonProps {
  text: React.ReactNode
  callOption: any
}

export default function CallAppButton({ text, callOption, ...resetBtnProps }: Props) {
  const { path = "", ...initialOption } = callOption ?? {};
  return (
    <Button
      {...resetBtnProps}
      onClick={() => {
        const lib = new CallApp({
          fallback: window.location.href,
          ...initialOption
        });
        lib.open({
          path
        });
      }}
    >
      {text}
    </Button>
  );
}

// const initialOptionExample = {
//   scheme: {
//     protocol: "weixin" //必填项 URL Scheme 的 scheme 字段，要打开的 APP 的标识，比如这里是微信的标识
//   },
//   intent: {
//     //安卓原生谷歌浏览器必须传递 Intent 协议地址，才能唤起 APP
//     // 这两个是intent的必填项
//     package: "com.tencent.mm", //腾讯微信包名
//     scheme: "weixin"
//   },
//   appstore: "https://weixin.qq.com/", //必填项 APP 的下载地址，比如这里是微信的下载地址

//   yingyongbao: "https://sj.qq.com/myapp/detail.htm?apkName=com.tencent.mm", //必填项 APP 的应用宝地址，比如这里微信的应用宝下载地址

//   fallback: window.location.href //必填项 唤起app端失败后跳转的地址。
// };
