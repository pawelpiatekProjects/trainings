import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from '../../../../assets/variables';
import SideNav from "../../../navigation/sideNav";
import heroImg from '../../../../assets/images/svg/grafika9.svg';
import Backdrop from "../../../UIComponents/backdrop";
import AddNewDay from "./addNewDay";
import TrainingDays from "./trainingDays/trainingDays";

const TrainingPlanWrapper = styled.div`
  height: 100%;
  background: ${variables.grayPrimary};
  position: relative;
  
`;

const Content = styled.div`
  background: ${variables.light};
  width: 80%;
  margin: 8rem auto;
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const HeroImg = styled.div`
  background-image: url(${heroImg});
  width: 100%;
  height: 30rem;
  background-repeat: no-repeat;
   background-position: center;
   background-size: 100%;
`;

const TrainingHeading = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrainingHeader = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  width: 75%;
  text-align: left;
`;

const HeadingButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

const Button = styled.button`
  font-size: 1.6rem;
  border: 3px solid ${variables.yellowPrimary};
  padding: .5rem 2rem;
  background: ${variables.light};
  transition: all .3s;
  
  &:hover{
    background: ${variables.yellowPrimary};
    color: ${variables.light};
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  color: ${variables.textColorSecondary};
`;

const InfoRowItem = styled.p`
  span {
    font-weight: 700;
  }
`;

const DescriptionRow = styled.p`
  width: 50%;
  padding: 2rem 3rem;
  text-align: left;
  color: ${variables.textColorSecondary};
`;

const DaysRow = styled.div`
  padding: 3rem;
  
`;

const NoDays = styled.h1`
  border: 1px dashed ${variables.textColorSecondary};
  padding: 2rem;
`;

const NoDaysHeader = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  color: ${variables.textColorSecondary};
  margin-bottom: 3rem;
`;




const TrainingPlanContent = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const onOpenModal = () =>{
        setModalOpen(true);
    }
    return(
        <TrainingPlanWrapper>
            <SideNav/>
            <Content>
                <HeroImg></HeroImg>
                <TrainingHeading>
                    <TrainingHeader>FBW1</TrainingHeader>
                    <HeadingButtons>
                        <Button onClick={()=> onOpenModal()}>Add Training Day</Button>
                        {/*todo: disable this button when there are no training days*/}
                        <Button>Edit</Button>
                    </HeadingButtons>
                </TrainingHeading>
                <InfoRow>
                    <InfoRowItem>Created: <span>25-02-2020</span></InfoRowItem>
                    <InfoRowItem>Frequency: <span>4 days</span></InfoRowItem>
                    <InfoRowItem>Priority: <span>none</span></InfoRowItem>
                </InfoRow>
                <DescriptionRow>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam nisi, porttitor vitae fringilla ac, feugiat ut purus. Nunc eu condimentum sapien, eget ornare nisi. Sed pulvinar rutrum eros, ultrices hendrerit dui sollicitudin
                </DescriptionRow>
                <DaysRow>
                    {/*Section which is displaying when there are no training days*/}
                    <NoDays>
                        <NoDaysHeader>
                            Your training plan is empty. Add training days
                        </NoDaysHeader>
                        <Button onClick={()=> onOpenModal()}>Add</Button>
                    </NoDays>
                    {/*Training days list*/}
                    <TrainingDays/>
                </DaysRow>
            </Content>
            <Backdrop isOpen={isModalOpen} close={setModalOpen}/>
            <AddNewDay isOpen={isModalOpen}/>
        </TrainingPlanWrapper>
    )
};

export default TrainingPlanContent;
