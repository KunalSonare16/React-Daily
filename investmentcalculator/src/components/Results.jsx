import {calculateInvestmentResults,formatter} from '../util/investment.js'
export default function Results({input}){
  const resultData =  calculateInvestmentResults(input);
  const initialInvestment = resultData[0].valueEndOfYear -
                            resultData[0].interest-
                            resultData[0].annualInvestment;
    return(

        <table id='result'>
            <thead>
                <tr>
                    <th>year</th>
                    <th>Investment Value</th>
                    <th>Intrest (year)</th>
                    <th>Total Intrest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    resultData.map(yearData =>{
                        const totalIntrest = 
                                       yearData.valueEndOfYear
                                       - yearData.annualInvestment * yearData.year
                                       -initialInvestment;
                        const totalAmountInvested = 
                                            yearData.valueEndOfYear -
                                            totalIntrest;
                    return (
                     <tr key={yearData.year} >
                     <th>{yearData.year}</th>
                      <th>{formatter.format(yearData.valueEndOfyear)}</th>
                       <th>{formatter.format(yearData.interest)}</th>
                        <th>{formatter.format(totalIntrest)}</th>
                         <th>{formatter.format(totalAmountInvested)}</th>
                     </tr>
                    );})
                }
            </tbody>
        </table>
    );
}