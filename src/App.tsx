import Button from "./components/Button";
import CallAppButton from "./components/CallAppButton";
import useStep from "./hooks/useStep";
import Stepper from "./components/Stepper";
import StepOption from "./components/StepOption";
import Box from "@mui/material/Box";
import Progress from "./components/Progress";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const fieldChargeAreaBtnsOption =  [
  {
    path: "https://mo.fish/",
    text: "🐟 鱼塘"
  },
  {
    type: "native",
    text: "⚖️ 罗翔说刑法",
    protocol: "bilibili",
    path: "space/517327498"
  },
  {
    type: "native",
    text: "🧐 司马南",
    protocol: "snssdk1128",
    path: "user/profile/95125186957"
  },
  {
    type: "native",
    text: "📚 微信读书",
    protocol: "anywhere",
    path: "open?sid=5565"
  },
]

function App() {
  const { activeStep, ...operations } = useStep();
  const planArea = {
    label: "规划区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          {
            type: "native",
            text: "✍️ 计划",
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
        btnsOption={[...fieldChargeAreaBtnsOption]}
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
            text: "✨ B站",
            protocol: "bilibili",
            path: "home"
          },
          {
            type: "native",
            text: "😂 抖音",
            protocol: "snssdk1128"
          },
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
            type: "native",
            text: "🖼️ 语雀",
            protocol: "anywhere",
            path: "open?sid=8475"
          },
          {
            type: "native",
            text: "📘 掘金",
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
            text: "💪 百度网盘",
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
          {
            type: "native",
            text: "🎼 冥想放松",
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
            text: "💰 基金",
            protocol: "alipays",
            path: "platformapi/startapp?appId=20000793"
          },
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
            text: "🤸 瘦身",
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
            text: "🧐 自省",
            protocol: "ticktick"
          }
        ]}
        stepProps={operations}
      />
    )
  };
  const lastFieldChargeArea = {
    label: "领域充电区",
    content: (
      <ContentWithStepOption
        btnsOption={[...fieldChargeAreaBtnsOption]}
        stepProps={{ ...operations, disabledNext: true }}
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
    lastFieldChargeArea
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
      text: "H❤F",
      protocol: "anywhere",
      path: "open?sid=3584"
    },
    {
      type: "native",
      text: "✍️ 滴答清单",
      protocol: "ticktick"
    },
    {
      type: "native",
      text: "⚖️ B站收藏",
      protocol: "bilibili",
      path: "main/favorite"
    },
    {
      type: "native",
      text: "🤏 脉脉",
      protocol: "anywhere",
      path: "open?sid=0900"
    },
    {
      type: "native",
      text: "🎼  QQ音乐",
      protocol: "qqmusic",
      path: "ui/myTab"
    },
    {
      type: "native",
      text: "🥤 喝水时间",
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
      text: "📝 备忘录",
      protocol: "anywhere",
      path: "open?sid=7205"
    }, 
    {
      type: "native",
      text: "📱 应用管理",
      protocol: "anywhere",
      path: "open?sid=5667"
    },


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
