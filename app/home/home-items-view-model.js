const observableModule = require("tns-core-modules/data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Ogden",
                station: "Ogden Station",
                address: "2393 South Wall Avenue",
                city: "Ogden, UT 84511",
                northBound: "North Bound",
                southBound: "South Bound",
                routes: { 
                    NBtime: "5:24 AM   6:24 AM   6:54 AM   7:24 AM  7:54 AM  8:24 AM   8:54 AM   9:24 AM  NO STOP  10:24 AM   NO STOP   11:24 AM   12:24 PM   1:24 PM   2:24 PM   3:24 PM   3:54 PM   4:24 PM   4:54 PM   5:24 PM   5:54 PM   6:24 PM   6:54 PM   7:24 PM   7:54 PM   NO STOP   8:54 PM   NO STOP   9:54 PM   10:54 PM",
                    SBtime: "NO STOP   NO STOP  5:07 AM  5:37 AM   6:07 AM   6:37 AM  7:07 AM   7:37 AM   8:07 AM   8:37 AM   9:37 AM   10:37 AM   11:37 AM   12:37 PM   1:37 PM   NO STOP   2:37 PM   3:07 PM   3:37 PM   4:07 PM   4:37 PM   5:07 PM   5:37 PM   6:07 PM   6:37 PM   7:07 PM   8:07 PM   9:07 PM   10:07 PM   10:37 PM   11:07 PM"
                },
                // NBtimes: `NO STOP   NO STOP   5:07 AM   5:37 AM  6:07 AM  6:37 AM   7:07 AM   7:37 AM  8:07 AM  8:37 AM   9:37 AM   10:37 AM   11:37 AM   12:37 PM   1:37 PM   NO STOP   2:37 PM   3:07 PM   3:37 PM   4:07 PM   4:37 PM   5:07 PM   5:37 PM   6:07 PM   6:37 PM   7:07 PM   8:07 PM   9:07 PM   10:07 PM   10:37 PM   11:07 PM`,
                // SBtimes: `9:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
            },
            {
                name: "Roy",
                station: "Roy Station",
                address: "4155 S. Sandridge Dr.",
                city: "Roy, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                routes: {
                    NBtime: "5:16 AM   6:16 AM   6:46 AM   7:16 AM   7:46 AM   8:16 AM  8:46 AM  9:16 AM   NO STOP   10:16 AM   NO STOP   11:16 AM   12:16 PM   1:16 PM   2:16 PM   3:16 PM   3:46 PM   4:16 PM   4:46 PM   5:16 PM   5:46 PM   6:16 PM   6:46 PM   7:16 PM   7:46 PM   NO STOP   8:46 PM   NO STOP   9:46 PM   10:46 PM   11:46 PM   12:16 PM",
                    SBtime: "NO STOP   NO STOP   5:16 AM   5:46 AM   6:16 AM   6:46 PM  7:16 AM  7:46 AM   8:16 AM   8:46 AM   9:46 AM   10:46 AM   11:46 AM   12:46 PM   1:46 PM   NO STOP   2:46 PM   3:16 PM   3:46 PM   4:16 PM   4:46 PM   5:16 PM   5:46 PM   6:16 PM   6:46 PM   7:16 PM   8:16 PM   9:16 PM   10:16 PM   10:46 PM   11:16 PM"
                },
            },
            {
                name: "Clearfield",
                station: "Clearfield Station",
                address: "1250 S. State St.",
                city: "Clearfield, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                routes: {
                    NBtime: "5:07 AM   6:07 AM   6:37 AM   7:07 AM   7:37 AM   8:07 AM  8:37 AM  9:07 AM   NO STOP   10:07 AM   NO STOP   11:07 AM   12:07 PM   1:07 PM   2:07 PM   3:07 PM   3:37 PM   4:07 PM   4:37 PM   5:07 PM   5:37 PM   6:07 PM   6:37 PM   7:07 PM   7:37 PM   NO STOP   8:37 PM   NO STOP   9:37 PM   10:37 PM   11:37 PM   12:07 AM",
                    SBtime: "NO STOP   NO STOP   5:25 AM   5:55 AM   6:25 AM   6:55 AM  7:25 AM  7:55 AM   8:25 AM   8:55 AM   9:55 AM   10:55 AM   11:55 AM   12:55 PM   1:55 PM   NO STOP   2:55 PM   3:25 PM   3:55 PM   4:25 PM   4:55 PM   5:25 PM   5:55 PM   6:25 PM   6:55 PM   7:25 PM   8:25 PM   9:25 PM   10:25 PM   10:55 PM   11:25 PM"
                },            
            },
            {
                name: "Layton",
                station: "Layton Station",
                address: "150 S. Main St.",
                city: "Layton, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                routes: {
                    NBtime: "5:02 AM   6:02 AM   6:32 AM   7:02 AM   7:32 AM   8:02 AM  8:32 AM  9:02 AM   NO STOP   10:02 AM   NO STOP   11:02 AM   12:02 PM   1:02 PM   2:02 PM   3:02 PM   3:32 PM   4:02 PM   4:32 PM   5:02 PM   5:32 PM   6:02 PM   6:32 PM   7:02 PM   7:32 PM   NO STOP   8:32 PM   NO STOP   9:32 PM   10:32 PM   11:32 PM   12:02 AM",
                    SBtime: "NO STOP   NO STOP   5:32 AM   6:02 AM   6:32 AM   7:02 AM  7:32 AM  8:02 AM   8:32 AM   9:02 AM   10:02 AM   11:02 AM   12:02 PM   1:02 PM   2:02 PM   NO STOP   3:02 PM   3:32 PM   4:02 PM   4:32 PM   5:02 PM   5:32 PM   6:02 PM   6:32 PM   7:02 PM   7:32 PM   8:32 PM   9:32 PM   10:32 PM   11:02 PM   11:32 PM"
                },            
            },
            {
                name: "Farmington",
                station: "Farmington Station",
                address: "450 N. 850 W.",
                city: "Farmington, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `1:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Woods Cross",
                station: "Wood Cross Station",
                address: "750 S. 800 W.",
                city: "Woods Cross, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `2:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "North Temple",
                station: "North Temple Station",
                address: "500 W. North Temple",
                city: "Salt Lake City, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `3:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Salt Lake Central",
                station: "Salt Lake Central",
                address: "250 S. 600 W.",
                city: "Salt Lake City, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `4:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Murray Central Station",
                station: "Murray Central Station",
                address: "140 W. Vine St.",
                city: "Murray, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `5:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "South Jordan Station",
                station: "South Jordan Station",
                address: "10351 South Jordan Gateway",
                city: "South Jordan, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `7:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Draper Station",
                station: "Draper Station",
                address: "12997 S. FrontRunner Blvd.",
                city: "Draper, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `6:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Lehi Station",
                station: "Lehi Station",
                address: "3101 N. Ashton Blvd.",
                city: "Lehi, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `5:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "American Fork Station",
                station: "American Fork Station",
                address: "782 W. 200 S.",
                city: "American Fork, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `4:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Orem Central",
                station: "Orem Central Station",
                address: "1350 W. 900 S.",
                city: "Orem, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `3:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Provo Station",
                station: "Provo Station",
                address: "690 S. University Ave.",
                city: "Provo, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `2:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            }
        ],
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
