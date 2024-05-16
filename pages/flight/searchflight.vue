<template>
  <div>
    <div class="">
      <div>
        <!-- <p>{{ responseData }}</p> -->
        <Trending :responseData="responseData" />
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
    methods: {
    // Function to format date to "Day, DD Month" format
    formatDate(dateString) {
      const options = { weekday: 'short', day: '2-digit', month: 'short' };
      return new Date(dateString).toLocaleString('en-US', options);
    },
     // Function to format time to "HH:mm" format
    formatTime(timeString) {
      return new Date(timeString).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    }
  },

  computed: {
    responseData() {
      // Access the responseData from $route.params
      const apiResponseData = this.$route.params.response;
      // console.log("search apiResponseData ", apiResponseData);

      // Extract flights information
      const flights = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airAirSegmentList.airAirSegment;


      // Extract fare information
      const carrier = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airBrandList.airBrand;
      // Extract pricing solutions
      const pricingSolutions = apiResponseData.flights.SOAPBody.airLowFareSearchRsp.airAirPricingSolution;

      // Create an array to store formatted flight details
      const formattedFlights = [];


      if (Array.isArray(flights)) {
        // If there are multiple flight segments
        flights.forEach(flight => {
          // Find corresponding pricing solution
            // const pricingSolution = pricingSolutions.find(solution => solution["@attributes"].Key === flight["@attributes"].Key);

            console.log("Pricing Solutions", pricingSolutions)
            // const pricingSolution = pricingSolutions.find(solution => solution.airJourney.airAirSegmentRef["@attributes"].Key === flight["@attributes"].Key);

            const pricingSolution = pricingSolutions.find(solution => {
    // Check if airAirSegmentRef is an array
    if (Array.isArray(solution.airJourney.airAirSegmentRef)) {
        // Iterate over each element in the array
        for (const segmentRef of solution.airJourney.airAirSegmentRef) {
            if (segmentRef["@attributes"].Key === flight["@attributes"].Key) {
                return true; // Found the matching Key
            }
        }
        return false; // Key not found in any element
    } else {
        // If airAirSegmentRef is a single object
        return solution.airJourney.airAirSegmentRef["@attributes"].Key === flight["@attributes"].Key;
    }
});

          // Format flight details
          const formattedFlight = {
            origin: flight["@attributes"].Origin,
            destination: flight["@attributes"].Destination,
            departureTime: this.formatTime(flight["@attributes"].DepartureTime),
            arrivalTime: this.formatTime(flight["@attributes"].ArrivalTime),
            departureDate: this.formatDate(flight["@attributes"].DepartureTime),
            arrivalDate: this.formatDate(flight["@attributes"].ArrivalTime),
            flightTime: parseInt(flight["@attributes"].FlightTime),
            equipment: flight["@attributes"].Equipment,
            totalPrice:  pricingSolution ? pricingSolution["@attributes"].TotalPrice.substring(3) : null,
            // carrierName: carrier ? carrier["@attributes"].Carrier : null,


            // totalPrice: pricingSolution["@attributes"].TotalPrice,
            // totalFare: pricingSolution["@attributes"].TotalPrice // Adjust this line if necessary
          };

          // Push the formatted flight to the array
          formattedFlights.push(formattedFlight);
        });
      } else if (flights) {
        // If there is only one flight segment
        const flight = flights;

        // Find corresponding pricing solution
        // const pricingSolution = pricingSolutions.find(solution => solution["@attributes"].Key === flight["@attributes"].Key);




        // console.log("Single flight Response: ", flight);

        // Format flight details
        const formattedFlight = {
          origin: flight["@attributes"].Origin,
          destination: flight["@attributes"].Destination,
          departureTime: this.formatTime(flight["@attributes"].DepartureTime),
          arrivalTime: this.formatTime(flight["@attributes"].ArrivalTime),
          departureDate: this.formatDate(flight["@attributes"].DepartureTime),
          arrivalDate: this.formatDate(flight["@attributes"].ArrivalTime),
          flightTime: parseInt(flight["@attributes"].FlightTime),
          equipment: flight["@attributes"].Equipment,
           totalPrice: pricingSolutions ? pricingSolutions["@attributes"].TotalPrice.substring(3) : null,
          carrierName: carrier ? carrier["@attributes"].Name : null,

          // totalPrice: pricingSolution["@attributes"].TotalPrice,
          // totalFare: pricingSolution["@attributes"].TotalPrice // Adjust this line if necessary
        };

        // Push the formatted flight to the array
        formattedFlights.push(formattedFlight);
      }

      // Sort the flights based on departure time
      formattedFlights.sort((a, b) => a.departureTime - b.departureTime);

      // Now, formattedFlights contains the flights sorted by departure time and formatted with fare information
      console.log(formattedFlights);

      return formattedFlights;
    },

  },
};
</script>

<style scoped></style>
