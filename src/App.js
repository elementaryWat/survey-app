import { useEffect } from 'react';
import { useSurveyStore } from './store/survey/useSurveyStore';
import { useSContractStore } from './store/sContract/useSContractStore';
import { Alert, CircularProgress } from '@mui/material'
import SurveyContainer from './screens/SurveyContainer';
import { BalanceContainer, MainContainer } from './styled';
import FlexContainer from './components/shared/FlexContainer';


function App() {
	const { fetchSurveyData } = useSurveyStore();
	const { balance, isLoadingBalance, isConnectedToRopsten, fetchAccountBalance } = useSContractStore();

	useEffect(() => {
		fetchSurveyData();
	}, [])

	useEffect(() => {
		if (isConnectedToRopsten) {
			fetchAccountBalance();
		}
	}, [isConnectedToRopsten])



	return (
		<MainContainer>
			{!isConnectedToRopsten && <Alert severity="info">First install Metamask and connect to Ropsten to use the app</Alert>}
			{
				isConnectedToRopsten && <FlexContainer>
					<BalanceContainer>
						{isLoadingBalance ? <span><CircularProgress /> Loading Balance</span> : `Your current balance is ${balance} QUIZ`}
					</BalanceContainer>
					<SurveyContainer />
				</FlexContainer>
			}
		</MainContainer>
	);
}

export default App;
