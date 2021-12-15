import Button from "./components/Button";
import CallAppButton from "./components/CallAppButton";
import useStep from "./hooks/useStep";
import Stepper from "./components/Stepper";
import StepOption from "./components/StepOption";
import Box from "@mui/material/Box";
import Progress from "./components/Progress";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const { activeStep, ...operations } = useStep();
  const planArea = {
    label: "规划区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            type: "native",
            text: "✍️ plan",
            protocol: "ticktick"
          }
        ]}
        stepProps={{ ...operations, disabledBack: true }}
      />
    )
  };
  const fieldChargeArea = {
    label: "领域充电区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            path: "https://mo.fish/",
            text: "🐟 fish"
          },
          {
            type: "native",
            protocol: "weixin",
            path: "dl/business/?t=0SHRUFWuePm",
            text: "📰 news"
          },
          {
            type: "native",
            text: "🤏 Network",
            protocol: "anywhere",
            path: "open?sid=0900"
          },
          {
            type: "native",
            text: "⚖️ law",
            protocol: "bilibili",
            path: "space/517327498"
          },
          {
            type: "native",
            text: "🧐 literature",
            protocol: "snssdk1128",
            path: "user/profile/95125186957"
          },
          {
            type: "native",
            text: "🐻 parenting",
            protocol: "snssdk1128",
            path: "user/profile/3337763956471383"
          },
          {
            type: "native",
            text: "😃 life",
            protocol: "bilibili",
            path: "space/699492406"
          },
          {
            type: "native",
            text: "🤗 psychology",
            protocol: " bilibili",
            path: "video/9781864"
          },
          {
            type: "native",
            text: "📚 read",
            protocol: "anywhere",
            path: "open?sid=4151"
          },
          {
            type: "native",
            text: "📜 literature",
            protocol: "bilibili",
            path: "space/532741557"
          }
        ]}
        stepProps={operations}
      />
    )
  };
  const funArea = {
    label: "娱乐区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            type: "native",
            text: "😂 fun",
            protocol: "snssdk1128"
          },
          {
            type: "native",
            text: "✨ bilibili",
            protocol: "bilibili",
            path: "home"
          },
          {
            type: "native",
            text: "🎮 game",
            protocol: "anywhere",
            path: "open?sid=7041"
          }
          // TODO 抖音电影推荐/剪辑
        ]}
        stepProps={operations}
      />
    )
  };
  const workChargeArea = {
    label: "工作充电区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            path:
              "https://keylenn.yuque.com/docs/share/70c19e12-c1c3-4a0d-abc0-3f7df7b93bd7",
            text: "🖼️ Knowledge"
          },
          {
            type: "native",
            text: "📘 rare earth nuggets",
            protocol: "anywhere",
            path: "open?sid=5091"
          },
          {
            type: "native",
            text: "🌱 leedcoe",
            protocol: "anywhere",
            path: "open?sid=9152"
          },
          {
            type: "native",
            text: "💪 Baidu Netdisk",
            protocol: "anywhere",
            path: "open?sid=7959"
          }
        ]}
        stepProps={operations}
      />
    )
  };
  const energyChargeArea = {
    label: "精力充电区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          // TODO 切换到歌单tab
          {
            type: "native",
            text: "🎼 mindfulness",
            protocol: "qqmusic",
            path: "ui/myTab"
          }
        ]}
        stepProps={operations}
      />
    )
  };
  const investArea = {
    label: "韭菜区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            type: "native",
            text: "💰 fund",
            protocol: "alipays",
            path: "platformapi/startapp?appId=20000793"
          },
          {
            type: "native",
            text: "💳 Fixed investment",
            protocol: "anywhere",
            path: "open?sid=3131"
          }
        ]}
        stepProps={operations}
      />
    )
  };
  const sportArea = {
    label: "运动区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            type: "native",
            text: "🤸 reduce fat",
            protocol: " snssdk1128",
            path: "aweme/detail/7031529192739081475"
          }
        ]}
        stepProps={operations}
      />
    )
  };
  const introspectionArea = {
    label: "自省区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            type: "native",
            text: "🧐  Introspection",
            protocol: "ticktick"
          }
        ]}
        stepProps={operations}
      />
    )
  };
  const steps = [
    planArea,
    fieldChargeArea,
    funArea,
    workChargeArea,
    funArea,
    energyChargeArea,
    investArea,
    workChargeArea,
    funArea,
    sportArea,
    fieldChargeArea,
    introspectionArea,
    fieldChargeArea
  ].map((step) => ({ ...step, key: uuidv4() }));
  const percent = (activeStep + 1) / steps.length;
  return (
    <div className="App">
      <Progress percent={percent} />
      <Block title="Daliy" flex={5}>
        <Stepper activeStep={activeStep} steps={steps} />
      </Block>

      <Block title="Tools" flex={2}>
        <Tools />
      </Block>
    </div>
  );
}

export default App;

function Tools() {
  const tools = [
    {
      type: "native",
      text: "✍️ add",
      protocol: "ticktick"
    },
    {
      type: "native",
      text: "🍅 focus",
      protocol: "weixin",
      path: "dl/business/?t=JaOekhEPkMk"
    },
    {
      type: "native",
      text: "🎼  Music",
      protocol: "qqmusic",
      path: "ui/myTab"
    },
    {
      type: "native",
      text: "🥤 drink",
      protocol: "anywhere",
      path: "open?sid=9456"
    },
    {
      type: "native",
      text: "❤️ heal",
      protocol: "anywhere",
      path: "open?sid=1894"
    },
    {
      type: "native",
      text: "📝 memo",
      protocol: "anywhere",
      path: "open?sid=7205"
    },
    {
      type: "native",
      text: "📱 apps",
      protocol: "anywhere",
      path: "open?sid=5225"
    }
  ];
  return <>{tools.map((opt, idx) => <BtnWithType key={idx} {...opt} />)}</>
}

function Block({ title = "", flex = 1, children }: any) {
  return (
    <section style={{ flex }}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function BtnWithType({ type, ...option }: any) {
  switch (type) {
    case "native":
      return <CallAppButton {...genCallOption(option)} sx={{ mt: 1, mr: 1 }} />;
    default:
      const { path, text = null } = option ?? {};
      return (
        <Button
          onClick={() => {
            window.location.href = path;
          }}
          {...option}
        >
          {text}
        </Button>
      );
  }
}

function ContentWithStepOption({ btnsOption, stepProps, extraContent }: any) {
  let btnsContent = null;

  if (Array.isArray(btnsOption)) {
    btnsContent = btnsOption.map((opt, idx) => (
      <BtnWithType key={idx} sx={{ mt: 1, mr: 1 }} {...opt} />
    ));
  } else if (btnsOption && typeof btnsOption === "object") {
    btnsContent = <BtnWithType {...btnsOption} />;
  }
  return (
    <>
      <Box sx={{ mb: 2 }}>
        {btnsContent}
        {extraContent}
      </Box>
      <StepOption {...stepProps} />
    </>
  );
}

function genCallOption({
  protocol,
  path = "",
  callOption,
  ...restCallOption
} = {} as any) {
  return {
    ...restCallOption,
    callOption: {
      scheme: {
        protocol
      },
      path,
      ...callOption
    }
  };
}
