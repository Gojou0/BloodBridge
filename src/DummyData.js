const bloodDonationData = [
    {
      id: 101,
      name: "Angel Wings Blood Bank",
      address: "1102 Angel Avenue, Hyderabad, Telangana, India",
      contactNo: "+91 9876543273",
      timing: "Mon-Sat 8-4",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 102,
      name: "City Medical Center",
      address: "1103 City Road, Kolkata, West Bengal, India",
      contactNo: "+91 9876543274",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O-"],
      "avail" : false
    },
    {
      id: 103,
      name: "Sunshine Hospital",
      address: "1104 Sunshine Street, Pune, Maharashtra, India",
      contactNo: "+91 9876543275",
      timing: "Mon-Sat 8-6",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 104,
      name: "Unity Blood Bank",
      address: "1105 Unity Road, Bangalore, Karnataka, India",
      contactNo: "+91 9876543276",
      timing: "Mon-Fri 9-5",
      blood : ["A+","A-","B+","B-","O+",],
      "avail" : true
    },
    {
      id: 105,
      name: "Lifeblood Blood Center",
      address: "1106 Life Road, Delhi, India",
      contactNo: "+91 9876543277",
      timing: "Tue-Thurs 10-4",
      blood : ["A+","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 106,
      name: "Eternal Hope Hospital",
      address: "1107 Eternal Avenue, Mumbai, Maharashtra, India",
      contactNo: "+91 9876543278",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : false
    },
    {
      id: 107,
      name: "Samaritan Blood Bank",
      address: "1108 Samaritan Street, Chennai, Tamil Nadu, India",
      contactNo: "+91 9876543279",
      timing: "Mon-Sat 7-5",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 108,
      name: "Golden Heart Hospital",
      address: "1109 Golden Gate Road, Jaipur, Rajasthan, India",
      contactNo: "+91 9876543280",
      timing: "Mon-Fri 8-4",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : false
    },
    {
      id: 109,
      name: "Hope for Life Blood Drive",
      address: "1110 Hope Street, Lucknow, Uttar Pradesh, India",
      contactNo: "+91 9876543281",
      timing: "Tue-Sat 9-7",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 110,
      name: "Angel's Grace Blood Bank",
      address: "1111 Angel's Grace Avenue, Ahmedabad, Gujarat, India",
      contactNo: "+91 9876543282",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 111,
      name: "Sunrise Hospital",
      address: "1112 Sunrise Street, Bhubaneswar, Odisha, India",
      contactNo: "+91 9876543283",
      timing: "Mon-Sat 8-6",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : false
    },
    {
      id: 112,
      name: "Starlight Blood Center",
      address: "1113 Starlight Lane, Nagpur, Maharashtra, India",
      contactNo: "+91 9876543284",
      timing: "Mon-Fri 9-5",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 113,
      name: "Bright Future Hospital",
      address: "1114 Bright Future Road, Chandigarh, Punjab, India",
      contactNo: "+91 9876543285",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 114,
      name: "Lifeline Blood Drive",
      address: "1115 Lifeline Street, Guwahati, Assam, India",
      contactNo: "+91 9876543286",
      timing: "Tue-Thurs 10-4",
      blood : ["A+","A-","B+","B-","AB+","AB-"],
      "avail" : false
    },
    {
      id: 115,
      name: "Angel's Hope Hospital",
      address: "1116 Angel's Hope Road, Raipur, Chhattisgarh, India",
      contactNo: "+91 9876543287",
      timing: "Mon-Fri 8-4",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 116,
      name: "Evergreen Blood Bank",
      address: "1117 Evergreen Avenue, Gandhinagar, Gujarat, India",
      contactNo: "+91 9876543288",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 117,
      name: "Divine Care Hospital",
      address: "1118 Divine Care Street, Kohima, Nagaland, India",
      contactNo: "+91 9876543289",
      timing: "Mon-Sat 9-7",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 118,
      name: "Sunflower Blood Center",
      address: "1119 Sunflower Road, Imphal, Manipur, India",
      contactNo: "+91 9876543290",
      timing: "Mon-Fri 8-6",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 119,
      name: "Golden Dawn Hospital",
      address: "1120 Golden Dawn Avenue, Agartala, Tripura, India",
      contactNo: "+91 9876543291",
      timing: "Mon-Sun 24/7",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    },
    {
      id: 120,
      name: "Trinity Blood Drive",
      address: "1121 Trinity Lane, Shillong, Meghalaya, India",
      contactNo: "+91 9876543292",
      timing: "Tue-Thurs 9-5",
      blood : ["A+","A-","B+","B-","O+","O-"],
      "avail" : true
    }
    // ,{
    //   id: 121,
    //   name: "Trinity Blood Drive",
    //   address: "1121 Trinity Lane, Rohini, Delhi, India",
    //   contactNo: "+91 9876543292",
    //   timing: "Tue-Thurs 9-5",
    //   blood : ["A+","A-","B+","B-","O+","O-"]
    // },
    // {
    //   id: 123,
    //   name: "Trinity Blood Drive",
    //   address: "1121 Trinity Lane, Dwarka , Delhi, India",
    //   contactNo: "+91 9876543292",
    //   timing: "Tue-Thurs 9-5",
    //   blood : ["A+","A-","B+","B-","O+","O-"]
    // },
    // {
    //     id: 121,
    //     name: "Rainbow Blood Center",
    //     address: "1122 Rainbow Road, Bhopal, Madhya Pradesh, India",
    //     contactNo: "+91 9876543293",
    //     timing: "Mon-Fri 9-5"
    //   },
    //   {
    //     id: 122,
    //     name: "Blue Ocean Blood Bank",
    //     address: "1123 Blue Ocean Street, Ranchi, Jharkhand, India",
    //     contactNo: "+91 9876543294",
    //     timing: "Mon-Sat 8-6"
    //   },
    //   {
    //     id: 123,
    //     name: "Angel's Touch Hospital",
    //     address: "1124 Angel's Touch Avenue, Patna, Bihar, India",
    //     contactNo: "+91 9876543295",
    //     timing: "Mon-Sun 24/7"
    //   },
    //   {
    //     id: 124,
    //     name: "Elysium Blood Drive",
    //     address: "1125 Elysium Lane, Srinagar, Jammu and Kashmir, India",
    //     contactNo: "+91 9876543296",
    //     timing: "Tue-Thurs 10-4"
    //   },
    //   {
    //     id: 125,
    //     name: "Tranquil Hospital",
    //     address: "1126 Tranquil Road, Gangtok, Sikkim, India",
    //     contactNo: "+91 9876543297",
    //     timing: "Mon-Fri 8-4"
    //   },
    //   {
    //     id: 126,
    //     name: "Everlasting Life Blood Center",
    //     address: "1127 Everlasting Avenue, Itanagar, Arunachal Pradesh, India",
    //     contactNo: "+91 9876543298",
    //     timing: "Mon-Sun 24/7"
    //   },
    //   {
    //     id: 127,
    //     name: "Golden Bridge Hospital",
    //     address: "1128 Golden Bridge Street, Dispur, Assam, India",
    //     contactNo: "+91 9876543299",
    //     timing: "Mon-Sat 9-5"
    //   },
    //   {
    //     id: 128,
    //     name: "Sunrise Blood Drive",
    //     address: "1129 Sunrise Lane, Aizawl, Mizoram, India",
    //     contactNo: "+91 9876543300",
    //     timing: "Mon-Fri 8-6"
    //   },
    //   {
    //     id: 129,
    //     name: "Lifegiver Blood Bank",
    //     address: "1130 Lifegiver Street, Kohima, Nagaland, India",
    //     contactNo: "+91 9876543301",
    //     timing: "Mon-Sun 24/7"
    //   },
    //   {
    //     id: 130,
    //     name: "Angel's Hope Hospital",
    //     address: "1131 Angel's Hope Road, Agartala, Tripura, India",
    //     contactNo: "+91 9876543302",
    //     timing: "Tue-Sat 9-7"
    //   },
    //   {
    //     id: 131,
    //     name: "Sunset Blood Center",
    //     address: "1132 Sunset Road, Raipur, Chhattisgarh, India",
    //     contactNo: "+91 9876543303",
    //     timing: "Mon-Sun 24/7"
    //   },
    //   {
    //     id: 132,
    //     name: "Raindrop Hospital",
    //     address: "1133 Raindrop Street, Panaji, Goa, India",
    //     contactNo: "+91 9876543304",
    //     timing: "Mon-Fri 9-5"
    //   },
    //   {
    //     id: 133,
    //     name: "Starlight Blood Bank",
    //     address: "1134 Starlight Avenue, Gandhinagar, Gujarat, India",
    //     contactNo: "+91 9876543305",
    //     timing: "Mon-Sat 8-6"
    //   },
    //   {
    //     id: 134,
    //     name: "Evergreen Blood Drive",
    //     address: "1135 Evergreen Road, Chandigarh, Punjab, India",
    //     contactNo: "+91 9876543306",
    //     timing: "Mon-Sun 24/7"
    //   },
    //   {
    //     id: 135,
    //     name: "Eternal Hope Hospital",
    //     address: "1136 Eternal Hope Street, Jaipur, Rajasthan, India",
    //     contactNo: "+91 9876543307",
    //     timing: "Tue-Thurs 10-4"
    //   },
    //   {
    //     id: 136,
    //     name: "Blue Sky Blood Center",
    //     address: "1137 Blue Sky Lane, Gangtok, Sikkim, India",
    //     contactNo: "+91 9876543308",
    //     timing: "Mon-Fri 8-4"
    //   },
    //   {
    //     id: 137,
    //     name: "Sunshine Hospital",
    //     address: "1138 Sunshine Street, Thiruvananthapuram, Kerala, India",
    //     contactNo: "+91 9876543309",
    //     timing: "Mon-Sun 24/7"
    //   },
    //   {
    //     id: 138,
    //     name: "Angel Care Blood Drive",
    //     address: "1139 Angel Care Avenue, Agartala, Tripura, India",
    //     contactNo: "+91 9876543310",
    //     timing: "Mon-Sat 9-5"
    //   },
    //   {
    //     id: 139,
    //     name: "Hope for Life Hospital",
    //     address: "1140 Hope for Life Road, Aizawl, Mizoram, India",
    //     contactNo: "+91 9876543311",
    //     timing: "Tue-Fri 10-6"
    //   },
    //   {
    //     id: 140,
    //     name: "Golden Heart Blood Bank",
    //     address: "1141 Golden Heart Street, Dispur"
    //   }
    ]
  export default bloodDonationData;
  