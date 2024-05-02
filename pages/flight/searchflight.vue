<template>
<div>
    <div class="">
  <div>
    <!-- <p>{{ responseData }}</p> -->
        <Trending  :responseData="responseData"/>
      </div>
    </div>
</div>

</template>

<script>
import Trending from '@/components/homepage/trendingflight.vue'
export default {

  components: {

    Trending
  },
  data() {
    return {
      response: [] // Initialize responseData with an empty array
    }
  },
  computed: {
    responseData() {
      // Access the responseData from $route.params

    const apiResponseData = this.$route.params.response;
    console.log("search apiResponseData ", apiResponseData);


// Extract flights information
const flightsArray = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airAirSegmentList.airAirSegment;
// console.log("search flight ",flights);
const flights = Object.values(flightsArray);

// Extract fare information
const fares = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airFareInfoList.airFareInfo;
// Extract pricing solutions
const pricingSolutionsObject = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airAirPricingSolution;
const pricingSolutions = Object.values(pricingSolutionsObject);

// Create an array to store formatted flight details
const formattedFlights = [];
// console.log(formattedFlights);

/// Iterate over each flight and match it with fare information and pricing solutions
console.log("total number of flights returned",flights.length);

flights.forEach(flight => {

  // Find corresponding pricing solution
  // const pricingSolution = pricingSolutions.find(solution =>
  //   solution["@attributes"].Key === flight["@attributes"].Key

  // );
  const pricingSolution = pricingSolutions[0];
  // console.log("Pricing Solutions ",pricingSolution.TotalPrice);

 console.log("flight Response: ",flight);
//  console.log("pricingSolution Response: ",pricingSolution);
  // Format flight details

  if(flight["@attributes"]){

    const formattedFlight = {
    origin: flight["@attributes"].Origin,
    destination: flight["@attributes"].Destination,
    departureTime: new Date(flight["@attributes"].DepartureTime),
    arrivalTime: new Date(flight["@attributes"].ArrivalTime),
    flightTime: parseInt(flight["@attributes"].FlightTime),
    equipment: flight["@attributes"].Equipment,

    totalPrice: pricingSolution["@attributes"].TotalPrice,
    totalFare: pricingSolution.airAirPricingInfo["@attributes"].TotalPrice
  };

  formattedFlights.push(formattedFlight);
  }else{
   const formattedFlight = {
    origin: flight.Origin,
    destination: flight.Destination,
    departureTime: new Date(flight.DepartureTime),
    arrivalTime: new Date(flight.ArrivalTime),
    flightTime: parseInt(flight.FlightTime),
    equipment: flight.Equipment,

    totalPrice: pricingSolution.TotalPrice,
    totalFare: pricingSolution.TotalPrice
    
  };
  formattedFlights.push(formattedFlight);
  }

  
 
  
  

  // Push the formatted flight to the array
  
});

// Sort the flights based on departure time
formattedFlights.sort((a, b) => a.departureTime - b.departureTime);

// Now, formattedFlights contains the flights sorted by departure time and formatted with fare information
// console.log(formattedFlights);

      return formattedFlights;
    }
  }
}
</script>

<style scoped>

</style>
