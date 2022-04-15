import { useEffect } from 'react';
import './App.css';
import { useSurveyStore } from './store/survey/useSurveyStore';
import { useSContractStore } from './store/sContract/useSContractStore';
import { Alert, CircularProgress } from '@mui/material'
import SurveyContainer from './screens/SurveyContainer';


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
		<div className='main-content'>
			{!isConnectedToRopsten && <Alert severity="info">First install Metamask and connect to Ropsten to use the app</Alert>}
			{
				isConnectedToRopsten && <div className='container'>
					<div className='header'>
						{isLoadingBalance ? <span><CircularProgress /> Loading Balance</span> : `Your current balance is ${balance} QUIZ`}

					</div>
					<SurveyContainer />
				</div>
			}
		</div>
	);
}

export default App;
