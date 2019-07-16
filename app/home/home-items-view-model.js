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
                    NBtime: "NO STOP   NO STOP   5:07 AM   5:37 AM  6:07 AM  6:37 AM   7:07 AM   7:37 AM  8:07 AM  8:37 AM   9:37 AM   10:37 AM   11:37 AM   12:37 PM   1:37 PM   NO STOP   2:37 PM   3:07 PM",
                    SBtime: "9:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  "
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
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `10:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Clearfield",
                station: "Clearfield Station",
                address: "1250 S. State St.",
                city: "Clearfield, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `11:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
            },
            {
                name: "Layton",
                station: "Layton Station",
                address: "150 S. Main St.",
                city: "Layton, UT",
                northBound: "North Bound",
                southBound: "South Bound",
                NBtimes: `8:00 AM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`,
                SBtimes: `12:00 PM   9:00 AM  10:00 AM  2:00 PM   3:30 PM    4:00 PM  7:00 PM  10:00 PM 10:35 PM`
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
