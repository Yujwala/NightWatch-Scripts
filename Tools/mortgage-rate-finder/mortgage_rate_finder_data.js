var data = {

    // Not a Customer / Non Existing Customer Search data

    $ncTypeOfBorrower:'NC_RR',
    $ncTerm: '20',
    $ncPropValue: 100000,
    $ncDepositWorth: 40000,
    // If additional Borrow is not required, declare a null value for logic to work properly
    $ncAddtnlBorrow: '',
    $ncRepaymentType:'repaymentCapAndInt',
    // Results for Fixed and Tracker
    //Pass as strings
    $ncFixedRes:'10',
    $ncTrackerRes:'2',

//<-------------------------------------------------------------------------------------------------->

    // Existing Customer Search data
    
    $ecTypeOfBorrower:'EC_RCD',
    $ecTerm: '20',
    $ecPropValue: 100000,
    $ecDepositWorth: 40000,
    // If additional Borrow is not required, declare a null value for logic to work properly
    $ecAddtnlBorrow: '',
    $ecRepaymentType:'repaymentCapAndInt',
    // Results for Fixed and Tracker.
    //Pass as strings
    $ecFixedRes:'6', 
    $ecTrackerRes:'2',
}

module.exports = {
    props: data
}