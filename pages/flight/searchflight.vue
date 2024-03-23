<template>
<div>
    <div class="">
  <div>
    <p>{{ responseData }}</p>
        <Trending :responseData="responseData" />
      </div>
    </div>
</div>

</template>

<script>
import Trending from '@/components/homepage/trendingflight.vue'
export default {
  // props: ['responseData'],
  components: {

    Trending
  },
  data() {
    return {
      responseData: [] // Initialize responseData with an empty array
    }
  },
  computed: {
    responseData() {
      // Access the responseData from $route.params

    const apiResponseData = this.$route.params.responseData;


// Extract flights information
const flights = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airAirSegmentList.airAirSegment;

// Extract fare information
const fares = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airFareInfoList.airFareInfo;
// Extract pricing solutions
const pricingSolutions = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airAirPricingSolution;
// Create an array to store formatted flight details
const formattedFlights = [];

/// Iterate over each flight and match it with fare information and pricing solutions
flights.forEach(flight => {

  // Find corresponding pricing solution
  const pricingSolution = pricingSolutions.find(solution =>
    solution.airJourney.airAirSegmentRef["@attributes"].Key === flight["@attributes"].Key

  );
//  console.log("pricingSolution Response: ",pricingSolution);
  // Format flight details
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

  // Push the formatted flight to the array
  formattedFlights.push(formattedFlight);
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
