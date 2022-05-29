import {FC} from 'react'
import Button from "./components/Button";
import CallAppButton from "./components/CallAppButton";
import useStep from "./hooks/useStep";
import Stepper from "./components/Stepper";
import StepOption from "./components/StepOption";
import Box from "@mui/material/Box";
import Progress from "./components/Progress";
import Accordion from "./components/Accordion"
import { v4 as uuidv4 } from "uuid";
import img0 from './assets/0.jpg'
import "./App.css";
import {btnsOption,tools, commonImgStyle} from './constanst'

function App() {
  const { activeStep, ...operations } = useStep();
  const healArea = {
    label: "健康区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          btnsOption.drink,
          btnsOption.heart,
        ]}
        stepProps={{ ...operations, disabledBack: true }}
      />
    )
  };
  const planArea = {
    label: "规划区",
    content: (
      <ContentWithStepOption
        extraContent={
          <Accordion summary={<BtnWithType {...btnsOption.plan}  />}>
            <p>实时检查清单🗒️，分清主次</p>
            <p>合理利用🍅番茄时间、⏲️碎片化时间等</p>
          </Accordion>
        }
        stepProps={operations}
      />
    )
  };
  const fieldChargeArea = {
    label: "领域充电区",
    content: (
      <ContentWithStepOption
        extraContent={
          <section>
            <Accordion defaultExpanded summary={'📰 朝览天下事'}>
              <Btns btnsOption={[btnsOption.news, btnsOption.fish]} />
            </Accordion>
            <Accordion summary={<BtnWithType {...btnsOption.zy} />}>
              <Btns btnsOption={[btnsOption.zjdc, btnsOption.hdnj]} />
              <img src={img0} alt="" style={{...commonImgStyle, marginTop: '1em'}} />
            </Accordion>
            <Accordion summary={<BtnWithType {...btnsOption.history} />}>
              <Btns btnsOption={[btnsOption.szbf, btnsOption.bxzgs]} />
            </Accordion>
            <Accordion summary={<BtnWithType {...btnsOption.pm} />}>
              <Btns btnsOption={[btnsOption.fmjz, btnsOption.xdl]} />
            </Accordion>
            <Accordion defaultExpanded summary={'🖌️ 书法之美'}>
              <Btns btnsOption={[btnsOption.hkjcbh]} />
            </Accordion>
            <Accordion defaultExpanded summary={'🛋️ 阅读之美'}>
              <Btns btnsOption={[btnsOption.whyRead, btnsOption.wxds]} />
            </Accordion>
            <Accordion defaultExpanded summary={'💰 投资之美'}>
              <Btns btnsOption={[btnsOption.charles, btnsOption.wxds]} />
            </Accordion>
          </section>
        
        }
        stepProps={operations}
      />
    )
  };
  const funArea = {
    label: "娱乐区",
    content: (
      <ContentWithStepOption
        btnsOption={[btnsOption.bilibili, btnsOption.tt, btnsOption.mp]}
        stepProps={operations}
      />
    )
  };
  const workChargeArea = {
    // @TODO
    label: "专业充电区",
    content: (
      <ContentWithStepOption
        btnsOption={[
          btnsOption.txwd,
          btnsOption.yq, 
          btnsOption.jj, 
          btnsOption.leedcode, 
          btnsOption.bdwp
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
          btnsOption.mx,
          btnsOption.wyth,
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
          btnsOption.fund,
          btnsOption.pazq
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
          btnsOption.jz,
          btnsOption.fj
        ]}
        stepProps={operations}
      />
    )
  };
  const introspectionArea = {
    label: "自省区",
    content: (
      <ContentWithStepOption
        extraContent={
        <Accordion defaultExpanded summary={'🧐 自省'}>
          <Btns btnsOption={[btnsOption.ddqd, btnsOption.sk]} />
        </Accordion>
      }
        stepProps={operations}
      />
    )
  };
  const lastFieldChargeArea = {
    label: "领域充电区",
    content: (
      <ContentWithStepOption
        extraContent={
          <section>
            <Accordion defaultExpanded summary={'📰 朝览天下事'}>
              <Btns btnsOption={[btnsOption.news, btnsOption.fish]} />
            </Accordion>
            <Accordion summary={<BtnWithType {...btnsOption.zy} />}>
              <Btns btnsOption={[btnsOption.zjdc, btnsOption.hdnj]} />
              <img src={img0} alt="" style={{...commonImgStyle, marginTop: '1em'}} />
            </Accordion>
            <Accordion summary={<BtnWithType {...btnsOption.history} />}>
              <Btns btnsOption={[btnsOption.szbf, btnsOption.bxzgs]} />
            </Accordion>
            <Accordion summary={<BtnWithType {...btnsOption.pm} />}>
              <Btns btnsOption={[btnsOption.fmjz, btnsOption.xdl]} />
            </Accordion>
            <Accordion defaultExpanded summary={'🖌️ 书法之美'}>
              <Btns btnsOption={[btnsOption.hkjcbh]} />
            </Accordion>
            <Accordion defaultExpanded summary={'🛋️ 阅读之美'}>
              <Btns btnsOption={[btnsOption.whyRead, btnsOption.wxds]} />
            </Accordion>
            <Accordion defaultExpanded summary={'💰 投资之美'}>
              <Btns btnsOption={[btnsOption.charles, btnsOption.wxds]} />
            </Accordion>
          </section>
        
        }
        stepProps={{ ...operations, disabledNext: true }}
      />
    )
  };
  const steps = [
    healArea,
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

const Btns: FC<{btnsOption: any[]}>  = ({btnsOption}) => {
  let btnsContent = null;

  if (Array.isArray(btnsOption)) {
    btnsContent = btnsOption.map((opt, idx) => (
      <BtnWithType key={idx} sx={{ mt: 1, mr: 1 }} {...opt} />
    ))
  } else if (btnsOption && typeof btnsOption === "object") {
    btnsContent = <BtnWithType {...btnsOption} />;
  }
  return <>{btnsContent}</>
}

function ContentWithStepOption({ btnsOption, stepProps, extraContent }: any) {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Btns btnsOption={btnsOption} />
        {extraContent && (
          <section style={{marginTop: '1em'}}>
            {extraContent}
          </section>
        )}
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
