import { SimplifyData, DaysData, MakeCardData,MakeBarCharData,GetAllDates } from "./transform";
import sampleData from "./sample_data";
test("test", () => {
 console.log( MakeBarCharData(DaysData(SimplifyData(sampleData)),6));
 console.log(GetAllDates(DaysData(SimplifyData(sampleData))));
});
