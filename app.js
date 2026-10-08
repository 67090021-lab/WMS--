const STORAGE_KEY = "wms_demo_v1";

const seedItems = [
  {
    "sku": "PENCIL-001",
    "barcode": "885010001",
    "description": "ดินสอ รุ่น 01",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R01-L01-B01",
    "stock": 102,
    "rop": 37,
    "lot": "LOT-A-001",
    "expiry": ""
  },
  {
    "sku": "PENCIL-002",
    "barcode": "885010002",
    "description": "ดินสอ รุ่น 02",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R01-L02-B01",
    "stock": 119,
    "rop": 44,
    "lot": "LOT-A-002",
    "expiry": ""
  },
  {
    "sku": "PENCIL-003",
    "barcode": "885010003",
    "description": "ดินสอ รุ่น 03",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R01-L03-B01",
    "stock": 136,
    "rop": 51,
    "lot": "LOT-A-003",
    "expiry": ""
  },
  {
    "sku": "PENCIL-004",
    "barcode": "885010004",
    "description": "ดินสอ รุ่น 04",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R01-L04-B01",
    "stock": 153,
    "rop": 58,
    "lot": "LOT-A-004",
    "expiry": ""
  },
  {
    "sku": "PENCIL-005",
    "barcode": "885010005",
    "description": "ดินสอ รุ่น 05",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R01-L05-B01",
    "stock": 170,
    "rop": 65,
    "lot": "LOT-A-005",
    "expiry": ""
  },
  {
    "sku": "PENCIL-006",
    "barcode": "885010006",
    "description": "ดินสอ รุ่น 06",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R02-L01-B01",
    "stock": 187,
    "rop": 72,
    "lot": "LOT-A-006",
    "expiry": ""
  },
  {
    "sku": "PENCIL-007",
    "barcode": "885010007",
    "description": "ดินสอ รุ่น 07",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R02-L02-B01",
    "stock": 23,
    "rop": 79,
    "lot": "LOT-A-007",
    "expiry": ""
  },
  {
    "sku": "PENCIL-008",
    "barcode": "885010008",
    "description": "ดินสอ รุ่น 08",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R02-L03-B01",
    "stock": 40,
    "rop": 35,
    "lot": "LOT-A-008",
    "expiry": ""
  },
  {
    "sku": "PENCIL-009",
    "barcode": "885010009",
    "description": "ดินสอ รุ่น 09",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R02-L04-B01",
    "stock": 57,
    "rop": 42,
    "lot": "LOT-A-009",
    "expiry": ""
  },
  {
    "sku": "PENCIL-010",
    "barcode": "885010010",
    "description": "ดินสอ รุ่น 10",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R02-L05-B01",
    "stock": 74,
    "rop": 49,
    "lot": "LOT-A-010",
    "expiry": ""
  },
  {
    "sku": "PENCIL-011",
    "barcode": "885010011",
    "description": "ดินสอ รุ่น 11",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R03-L01-B01",
    "stock": 91,
    "rop": 56,
    "lot": "LOT-A-011",
    "expiry": ""
  },
  {
    "sku": "PENCIL-012",
    "barcode": "885010012",
    "description": "ดินสอ รุ่น 12",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R03-L02-B01",
    "stock": 108,
    "rop": 63,
    "lot": "LOT-A-012",
    "expiry": ""
  },
  {
    "sku": "PENCIL-013",
    "barcode": "885010013",
    "description": "ดินสอ รุ่น 13",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R03-L03-B01",
    "stock": 125,
    "rop": 70,
    "lot": "LOT-A-013",
    "expiry": ""
  },
  {
    "sku": "PENCIL-014",
    "barcode": "885010014",
    "description": "ดินสอ รุ่น 14",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R03-L04-B01",
    "stock": 142,
    "rop": 77,
    "lot": "LOT-A-014",
    "expiry": ""
  },
  {
    "sku": "PENCIL-015",
    "barcode": "885010015",
    "description": "ดินสอ รุ่น 15",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R03-L05-B01",
    "stock": 159,
    "rop": 33,
    "lot": "LOT-A-015",
    "expiry": ""
  },
  {
    "sku": "PENCIL-016",
    "barcode": "885010016",
    "description": "ดินสอ รุ่น 16",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R04-L01-B01",
    "stock": 176,
    "rop": 40,
    "lot": "LOT-A-016",
    "expiry": ""
  },
  {
    "sku": "PENCIL-017",
    "barcode": "885010017",
    "description": "ดินสอ รุ่น 17",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R04-L02-B01",
    "stock": 193,
    "rop": 47,
    "lot": "LOT-A-017",
    "expiry": ""
  },
  {
    "sku": "PENCIL-018",
    "barcode": "885010018",
    "description": "ดินสอ รุ่น 18",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R04-L03-B01",
    "stock": 29,
    "rop": 54,
    "lot": "LOT-A-018",
    "expiry": ""
  },
  {
    "sku": "PENCIL-019",
    "barcode": "885010019",
    "description": "ดินสอ รุ่น 19",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R04-L04-B01",
    "stock": 46,
    "rop": 61,
    "lot": "LOT-A-019",
    "expiry": ""
  },
  {
    "sku": "PENCIL-020",
    "barcode": "885010020",
    "description": "ดินสอ รุ่น 20",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R04-L05-B01",
    "stock": 63,
    "rop": 68,
    "lot": "LOT-A-020",
    "expiry": ""
  },
  {
    "sku": "PENCIL-021",
    "barcode": "885010021",
    "description": "ดินสอ รุ่น 21",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R05-L01-B01",
    "stock": 80,
    "rop": 75,
    "lot": "LOT-A-021",
    "expiry": ""
  },
  {
    "sku": "PENCIL-022",
    "barcode": "885010022",
    "description": "ดินสอ รุ่น 22",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R05-L02-B01",
    "stock": 97,
    "rop": 31,
    "lot": "LOT-A-022",
    "expiry": ""
  },
  {
    "sku": "PENCIL-023",
    "barcode": "885010023",
    "description": "ดินสอ รุ่น 23",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R05-L03-B01",
    "stock": 114,
    "rop": 38,
    "lot": "LOT-A-023",
    "expiry": ""
  },
  {
    "sku": "PENCIL-024",
    "barcode": "885010024",
    "description": "ดินสอ รุ่น 24",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R05-L04-B01",
    "stock": 131,
    "rop": 45,
    "lot": "LOT-A-024",
    "expiry": ""
  },
  {
    "sku": "PENCIL-025",
    "barcode": "885010025",
    "description": "ดินสอ รุ่น 25",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "A",
    "location": "A-R05-L05-B01",
    "stock": 148,
    "rop": 52,
    "lot": "LOT-A-025",
    "expiry": ""
  },
  {
    "sku": "PEN-001",
    "barcode": "885020001",
    "description": "ปากกา รุ่น 01",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R01-L01-B01",
    "stock": 103,
    "rop": 37,
    "lot": "LOT-B-001",
    "expiry": ""
  },
  {
    "sku": "PEN-002",
    "barcode": "885020002",
    "description": "ปากกา รุ่น 02",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R01-L02-B01",
    "stock": 120,
    "rop": 44,
    "lot": "LOT-B-002",
    "expiry": ""
  },
  {
    "sku": "PEN-003",
    "barcode": "885020003",
    "description": "ปากกา รุ่น 03",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R01-L03-B01",
    "stock": 137,
    "rop": 51,
    "lot": "LOT-B-003",
    "expiry": ""
  },
  {
    "sku": "PEN-004",
    "barcode": "885020004",
    "description": "ปากกา รุ่น 04",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R01-L04-B01",
    "stock": 154,
    "rop": 58,
    "lot": "LOT-B-004",
    "expiry": ""
  },
  {
    "sku": "PEN-005",
    "barcode": "885020005",
    "description": "ปากกา รุ่น 05",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R01-L05-B01",
    "stock": 171,
    "rop": 65,
    "lot": "LOT-B-005",
    "expiry": ""
  },
  {
    "sku": "PEN-006",
    "barcode": "885020006",
    "description": "ปากกา รุ่น 06",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R02-L01-B01",
    "stock": 188,
    "rop": 72,
    "lot": "LOT-B-006",
    "expiry": ""
  },
  {
    "sku": "PEN-007",
    "barcode": "885020007",
    "description": "ปากกา รุ่น 07",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R02-L02-B01",
    "stock": 24,
    "rop": 79,
    "lot": "LOT-B-007",
    "expiry": ""
  },
  {
    "sku": "PEN-008",
    "barcode": "885020008",
    "description": "ปากกา รุ่น 08",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R02-L03-B01",
    "stock": 41,
    "rop": 35,
    "lot": "LOT-B-008",
    "expiry": ""
  },
  {
    "sku": "PEN-009",
    "barcode": "885020009",
    "description": "ปากกา รุ่น 09",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R02-L04-B01",
    "stock": 58,
    "rop": 42,
    "lot": "LOT-B-009",
    "expiry": ""
  },
  {
    "sku": "PEN-010",
    "barcode": "885020010",
    "description": "ปากกา รุ่น 10",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R02-L05-B01",
    "stock": 75,
    "rop": 49,
    "lot": "LOT-B-010",
    "expiry": ""
  },
  {
    "sku": "PEN-011",
    "barcode": "885020011",
    "description": "ปากกา รุ่น 11",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R03-L01-B01",
    "stock": 92,
    "rop": 56,
    "lot": "LOT-B-011",
    "expiry": ""
  },
  {
    "sku": "PEN-012",
    "barcode": "885020012",
    "description": "ปากกา รุ่น 12",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R03-L02-B01",
    "stock": 109,
    "rop": 63,
    "lot": "LOT-B-012",
    "expiry": ""
  },
  {
    "sku": "PEN-013",
    "barcode": "885020013",
    "description": "ปากกา รุ่น 13",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R03-L03-B01",
    "stock": 126,
    "rop": 70,
    "lot": "LOT-B-013",
    "expiry": ""
  },
  {
    "sku": "PEN-014",
    "barcode": "885020014",
    "description": "ปากกา รุ่น 14",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R03-L04-B01",
    "stock": 143,
    "rop": 77,
    "lot": "LOT-B-014",
    "expiry": ""
  },
  {
    "sku": "PEN-015",
    "barcode": "885020015",
    "description": "ปากกา รุ่น 15",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R03-L05-B01",
    "stock": 160,
    "rop": 33,
    "lot": "LOT-B-015",
    "expiry": ""
  },
  {
    "sku": "PEN-016",
    "barcode": "885020016",
    "description": "ปากกา รุ่น 16",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R04-L01-B01",
    "stock": 177,
    "rop": 40,
    "lot": "LOT-B-016",
    "expiry": ""
  },
  {
    "sku": "PEN-017",
    "barcode": "885020017",
    "description": "ปากกา รุ่น 17",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R04-L02-B01",
    "stock": 194,
    "rop": 47,
    "lot": "LOT-B-017",
    "expiry": ""
  },
  {
    "sku": "PEN-018",
    "barcode": "885020018",
    "description": "ปากกา รุ่น 18",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R04-L03-B01",
    "stock": 30,
    "rop": 54,
    "lot": "LOT-B-018",
    "expiry": ""
  },
  {
    "sku": "PEN-019",
    "barcode": "885020019",
    "description": "ปากกา รุ่น 19",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R04-L04-B01",
    "stock": 47,
    "rop": 61,
    "lot": "LOT-B-019",
    "expiry": ""
  },
  {
    "sku": "PEN-020",
    "barcode": "885020020",
    "description": "ปากกา รุ่น 20",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R04-L05-B01",
    "stock": 64,
    "rop": 68,
    "lot": "LOT-B-020",
    "expiry": ""
  },
  {
    "sku": "PEN-021",
    "barcode": "885020021",
    "description": "ปากกา รุ่น 21",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R05-L01-B01",
    "stock": 81,
    "rop": 75,
    "lot": "LOT-B-021",
    "expiry": ""
  },
  {
    "sku": "PEN-022",
    "barcode": "885020022",
    "description": "ปากกา รุ่น 22",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R05-L02-B01",
    "stock": 98,
    "rop": 31,
    "lot": "LOT-B-022",
    "expiry": ""
  },
  {
    "sku": "PEN-023",
    "barcode": "885020023",
    "description": "ปากกา รุ่น 23",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R05-L03-B01",
    "stock": 115,
    "rop": 38,
    "lot": "LOT-B-023",
    "expiry": ""
  },
  {
    "sku": "PEN-024",
    "barcode": "885020024",
    "description": "ปากกา รุ่น 24",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R05-L04-B01",
    "stock": 132,
    "rop": 45,
    "lot": "LOT-B-024",
    "expiry": ""
  },
  {
    "sku": "PEN-025",
    "barcode": "885020025",
    "description": "ปากกา รุ่น 25",
    "uom": "ชิ้น",
    "category": "เครื่องเขียน",
    "zone": "B",
    "location": "B-R05-L05-B01",
    "stock": 149,
    "rop": 52,
    "lot": "LOT-B-025",
    "expiry": ""
  },
  {
    "sku": "COLOR-001",
    "barcode": "885030001",
    "description": "สี รุ่น 01",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R01-L01-B01",
    "stock": 104,
    "rop": 37,
    "lot": "LOT-C-001",
    "expiry": "2027-01-03"
  },
  {
    "sku": "COLOR-002",
    "barcode": "885030002",
    "description": "สี รุ่น 02",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R01-L02-B01",
    "stock": 121,
    "rop": 44,
    "lot": "LOT-C-002",
    "expiry": "2027-02-05"
  },
  {
    "sku": "COLOR-003",
    "barcode": "885030003",
    "description": "สี รุ่น 03",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R01-L03-B01",
    "stock": 138,
    "rop": 51,
    "lot": "LOT-C-003",
    "expiry": "2027-03-07"
  },
  {
    "sku": "COLOR-004",
    "barcode": "885030004",
    "description": "สี รุ่น 04",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R01-L04-B01",
    "stock": 155,
    "rop": 58,
    "lot": "LOT-C-004",
    "expiry": "2027-04-09"
  },
  {
    "sku": "COLOR-005",
    "barcode": "885030005",
    "description": "สี รุ่น 05",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R01-L05-B01",
    "stock": 172,
    "rop": 65,
    "lot": "LOT-C-005",
    "expiry": "2027-05-11"
  },
  {
    "sku": "COLOR-006",
    "barcode": "885030006",
    "description": "สี รุ่น 06",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R02-L01-B01",
    "stock": 189,
    "rop": 72,
    "lot": "LOT-C-006",
    "expiry": "2027-06-13"
  },
  {
    "sku": "COLOR-007",
    "barcode": "885030007",
    "description": "สี รุ่น 07",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R02-L02-B01",
    "stock": 25,
    "rop": 79,
    "lot": "LOT-C-007",
    "expiry": "2027-07-15"
  },
  {
    "sku": "COLOR-008",
    "barcode": "885030008",
    "description": "สี รุ่น 08",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R02-L03-B01",
    "stock": 42,
    "rop": 35,
    "lot": "LOT-C-008",
    "expiry": "2027-08-17"
  },
  {
    "sku": "COLOR-009",
    "barcode": "885030009",
    "description": "สี รุ่น 09",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R02-L04-B01",
    "stock": 59,
    "rop": 42,
    "lot": "LOT-C-009",
    "expiry": "2027-09-19"
  },
  {
    "sku": "COLOR-010",
    "barcode": "885030010",
    "description": "สี รุ่น 10",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R02-L05-B01",
    "stock": 76,
    "rop": 49,
    "lot": "LOT-C-010",
    "expiry": "2027-10-21"
  },
  {
    "sku": "COLOR-011",
    "barcode": "885030011",
    "description": "สี รุ่น 11",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R03-L01-B01",
    "stock": 93,
    "rop": 56,
    "lot": "LOT-C-011",
    "expiry": "2027-11-23"
  },
  {
    "sku": "COLOR-012",
    "barcode": "885030012",
    "description": "สี รุ่น 12",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R03-L02-B01",
    "stock": 110,
    "rop": 63,
    "lot": "LOT-C-012",
    "expiry": "2027-12-25"
  },
  {
    "sku": "COLOR-013",
    "barcode": "885030013",
    "description": "สี รุ่น 13",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R03-L03-B01",
    "stock": 127,
    "rop": 70,
    "lot": "LOT-C-013",
    "expiry": "2027-01-01"
  },
  {
    "sku": "COLOR-014",
    "barcode": "885030014",
    "description": "สี รุ่น 14",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R03-L04-B01",
    "stock": 144,
    "rop": 77,
    "lot": "LOT-C-014",
    "expiry": "2027-02-03"
  },
  {
    "sku": "COLOR-015",
    "barcode": "885030015",
    "description": "สี รุ่น 15",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R03-L05-B01",
    "stock": 161,
    "rop": 33,
    "lot": "LOT-C-015",
    "expiry": "2027-03-05"
  },
  {
    "sku": "COLOR-016",
    "barcode": "885030016",
    "description": "สี รุ่น 16",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R04-L01-B01",
    "stock": 178,
    "rop": 40,
    "lot": "LOT-C-016",
    "expiry": "2027-04-07"
  },
  {
    "sku": "COLOR-017",
    "barcode": "885030017",
    "description": "สี รุ่น 17",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R04-L02-B01",
    "stock": 195,
    "rop": 47,
    "lot": "LOT-C-017",
    "expiry": "2027-05-09"
  },
  {
    "sku": "COLOR-018",
    "barcode": "885030018",
    "description": "สี รุ่น 18",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R04-L03-B01",
    "stock": 31,
    "rop": 54,
    "lot": "LOT-C-018",
    "expiry": "2027-06-11"
  },
  {
    "sku": "COLOR-019",
    "barcode": "885030019",
    "description": "สี รุ่น 19",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R04-L04-B01",
    "stock": 48,
    "rop": 61,
    "lot": "LOT-C-019",
    "expiry": "2027-07-13"
  },
  {
    "sku": "COLOR-020",
    "barcode": "885030020",
    "description": "สี รุ่น 20",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R04-L05-B01",
    "stock": 65,
    "rop": 68,
    "lot": "LOT-C-020",
    "expiry": "2027-08-15"
  },
  {
    "sku": "COLOR-021",
    "barcode": "885030021",
    "description": "สี รุ่น 21",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R05-L01-B01",
    "stock": 82,
    "rop": 75,
    "lot": "LOT-C-021",
    "expiry": "2027-09-17"
  },
  {
    "sku": "COLOR-022",
    "barcode": "885030022",
    "description": "สี รุ่น 22",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R05-L02-B01",
    "stock": 99,
    "rop": 31,
    "lot": "LOT-C-022",
    "expiry": "2027-10-19"
  },
  {
    "sku": "COLOR-023",
    "barcode": "885030023",
    "description": "สี รุ่น 23",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R05-L03-B01",
    "stock": 116,
    "rop": 38,
    "lot": "LOT-C-023",
    "expiry": "2027-11-21"
  },
  {
    "sku": "COLOR-024",
    "barcode": "885030024",
    "description": "สี รุ่น 24",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R05-L04-B01",
    "stock": 133,
    "rop": 45,
    "lot": "LOT-C-024",
    "expiry": "2027-12-23"
  },
  {
    "sku": "COLOR-025",
    "barcode": "885030025",
    "description": "สี รุ่น 25",
    "uom": "ชิ้น",
    "category": "อุปกรณ์ศิลปะ",
    "zone": "C",
    "location": "C-R05-L05-B01",
    "stock": 150,
    "rop": 52,
    "lot": "LOT-C-025",
    "expiry": "2027-01-25"
  },
  {
    "sku": "NOTE-001",
    "barcode": "885040001",
    "description": "สมุด รุ่น 01",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R01-L01-B01",
    "stock": 105,
    "rop": 37,
    "lot": "LOT-D-001",
    "expiry": "2027-01-03"
  },
  {
    "sku": "NOTE-002",
    "barcode": "885040002",
    "description": "สมุด รุ่น 02",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R01-L02-B01",
    "stock": 122,
    "rop": 44,
    "lot": "LOT-D-002",
    "expiry": "2027-02-05"
  },
  {
    "sku": "NOTE-003",
    "barcode": "885040003",
    "description": "สมุด รุ่น 03",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R01-L03-B01",
    "stock": 139,
    "rop": 51,
    "lot": "LOT-D-003",
    "expiry": "2027-03-07"
  },
  {
    "sku": "NOTE-004",
    "barcode": "885040004",
    "description": "สมุด รุ่น 04",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R01-L04-B01",
    "stock": 156,
    "rop": 58,
    "lot": "LOT-D-004",
    "expiry": "2027-04-09"
  },
  {
    "sku": "NOTE-005",
    "barcode": "885040005",
    "description": "สมุด รุ่น 05",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R01-L05-B01",
    "stock": 173,
    "rop": 65,
    "lot": "LOT-D-005",
    "expiry": "2027-05-11"
  },
  {
    "sku": "NOTE-006",
    "barcode": "885040006",
    "description": "สมุด รุ่น 06",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R02-L01-B01",
    "stock": 190,
    "rop": 72,
    "lot": "LOT-D-006",
    "expiry": "2027-06-13"
  },
  {
    "sku": "NOTE-007",
    "barcode": "885040007",
    "description": "สมุด รุ่น 07",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R02-L02-B01",
    "stock": 26,
    "rop": 79,
    "lot": "LOT-D-007",
    "expiry": "2027-07-15"
  },
  {
    "sku": "NOTE-008",
    "barcode": "885040008",
    "description": "สมุด รุ่น 08",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R02-L03-B01",
    "stock": 43,
    "rop": 35,
    "lot": "LOT-D-008",
    "expiry": "2027-08-17"
  },
  {
    "sku": "NOTE-009",
    "barcode": "885040009",
    "description": "สมุด รุ่น 09",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R02-L04-B01",
    "stock": 60,
    "rop": 42,
    "lot": "LOT-D-009",
    "expiry": "2027-09-19"
  },
  {
    "sku": "NOTE-010",
    "barcode": "885040010",
    "description": "สมุด รุ่น 10",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R02-L05-B01",
    "stock": 77,
    "rop": 49,
    "lot": "LOT-D-010",
    "expiry": "2027-10-21"
  },
  {
    "sku": "NOTE-011",
    "barcode": "885040011",
    "description": "สมุด รุ่น 11",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R03-L01-B01",
    "stock": 94,
    "rop": 56,
    "lot": "LOT-D-011",
    "expiry": "2027-11-23"
  },
  {
    "sku": "NOTE-012",
    "barcode": "885040012",
    "description": "สมุด รุ่น 12",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R03-L02-B01",
    "stock": 111,
    "rop": 63,
    "lot": "LOT-D-012",
    "expiry": "2027-12-25"
  },
  {
    "sku": "NOTE-013",
    "barcode": "885040013",
    "description": "สมุด รุ่น 13",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R03-L03-B01",
    "stock": 128,
    "rop": 70,
    "lot": "LOT-D-013",
    "expiry": "2027-01-01"
  },
  {
    "sku": "NOTE-014",
    "barcode": "885040014",
    "description": "สมุด รุ่น 14",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R03-L04-B01",
    "stock": 145,
    "rop": 77,
    "lot": "LOT-D-014",
    "expiry": "2027-02-03"
  },
  {
    "sku": "NOTE-015",
    "barcode": "885040015",
    "description": "สมุด รุ่น 15",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R03-L05-B01",
    "stock": 162,
    "rop": 33,
    "lot": "LOT-D-015",
    "expiry": "2027-03-05"
  },
  {
    "sku": "NOTE-016",
    "barcode": "885040016",
    "description": "สมุด รุ่น 16",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R04-L01-B01",
    "stock": 179,
    "rop": 40,
    "lot": "LOT-D-016",
    "expiry": "2027-04-07"
  },
  {
    "sku": "NOTE-017",
    "barcode": "885040017",
    "description": "สมุด รุ่น 17",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R04-L02-B01",
    "stock": 196,
    "rop": 47,
    "lot": "LOT-D-017",
    "expiry": "2027-05-09"
  },
  {
    "sku": "NOTE-018",
    "barcode": "885040018",
    "description": "สมุด รุ่น 18",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R04-L03-B01",
    "stock": 32,
    "rop": 54,
    "lot": "LOT-D-018",
    "expiry": "2027-06-11"
  },
  {
    "sku": "NOTE-019",
    "barcode": "885040019",
    "description": "สมุด รุ่น 19",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R04-L04-B01",
    "stock": 49,
    "rop": 61,
    "lot": "LOT-D-019",
    "expiry": "2027-07-13"
  },
  {
    "sku": "NOTE-020",
    "barcode": "885040020",
    "description": "สมุด รุ่น 20",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R04-L05-B01",
    "stock": 66,
    "rop": 68,
    "lot": "LOT-D-020",
    "expiry": "2027-08-15"
  },
  {
    "sku": "NOTE-021",
    "barcode": "885040021",
    "description": "สมุด รุ่น 21",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R05-L01-B01",
    "stock": 83,
    "rop": 75,
    "lot": "LOT-D-021",
    "expiry": "2027-09-17"
  },
  {
    "sku": "NOTE-022",
    "barcode": "885040022",
    "description": "สมุด รุ่น 22",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R05-L02-B01",
    "stock": 100,
    "rop": 31,
    "lot": "LOT-D-022",
    "expiry": "2027-10-19"
  },
  {
    "sku": "NOTE-023",
    "barcode": "885040023",
    "description": "สมุด รุ่น 23",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R05-L03-B01",
    "stock": 117,
    "rop": 38,
    "lot": "LOT-D-023",
    "expiry": "2027-11-21"
  },
  {
    "sku": "NOTE-024",
    "barcode": "885040024",
    "description": "สมุด รุ่น 24",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R05-L04-B01",
    "stock": 134,
    "rop": 45,
    "lot": "LOT-D-024",
    "expiry": "2027-12-23"
  },
  {
    "sku": "NOTE-025",
    "barcode": "885040025",
    "description": "สมุด รุ่น 25",
    "uom": "เล่ม",
    "category": "กระดาษ/สมุด",
    "zone": "D",
    "location": "D-R05-L05-B01",
    "stock": 151,
    "rop": 52,
    "lot": "LOT-D-025",
    "expiry": "2027-01-25"
  }
];

// Demo pallet records used by the QR receiving flow.
const seedPallets = seedItems.slice(0, 20).map((item, idx) => ({
  palletId: `PLT-${String(idx + 1).padStart(5, "0")}`,
  sku: item.sku,
  qty: 20 + (idx % 6) * 10,
  lot: item.lot,
  zone: item.zone,
  location: item.location,
  status: "IN_TRANSIT"
}));

const suppliers = [
  {code:"SUP001", name:"ABC Stationery Co., Ltd.", contact:"02-100-1000"},
  {code:"SUP002", name:"Bangkok Office Supply", contact:"02-200-2000"},
  {code:"SUP003", name:"Chonburi Paper & Art", contact:"038-300-300"},
  {code:"SUP004", name:"Eastern School Supply", contact:"038-400-400"}
];

const zoneInfo = [
  {zone:"A", name:"ดินสอ", description:"พื้นที่จัดเก็บดินสอ"},
  {zone:"B", name:"ปากกา", description:"พื้นที่จัดเก็บปากกา"},
  {zone:"C", name:"สี", description:"พื้นที่จัดเก็บสี"},
  {zone:"D", name:"สมุด", description:"พื้นที่จัดเก็บสมุด"}
];

const initialTransactions = [
  {id:"IN-0001", type:"IN", sku:"PENCIL-001", qty:80, zone:"A", location:"A-R01-L01-B01", date:"2026-10-07 08:30", note:"รับสินค้าเข้าคลัง"},
  {id:"OUT-0001", type:"OUT", sku:"PEN-001", qty:25, zone:"B", location:"B-R01-L01-B01", date:"2026-10-07 09:10", note:"จ่ายสินค้าให้ลูกค้า"},
  {id:"IN-0002", type:"IN", sku:"NOTE-001", qty:120, zone:"D", location:"D-R01-L01-B01", date:"2026-10-07 10:00", note:"รับสินค้าเข้าคลัง"}
];

function clone(x){ return JSON.parse(JSON.stringify(x)); }

function loadState(){
  const saved = localStorage.getItem(STORAGE_KEY);
  if(saved){
    try {
      const parsed = JSON.parse(saved);
      if(!parsed.pallets) parsed.pallets = clone(seedPallets);
      return parsed;
    } catch(e){}
  }
  return {items:clone(seedItems), transactions:clone(initialTransactions), pallets:clone(seedPallets)};
}

let state = loadState();

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function moneyOrNumber(v){ return Number(v).toLocaleString("th-TH"); }

function esc(v){
  return String(v ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

function todayText(){
  const d=new Date();
  return d.toLocaleDateString("th-TH",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
}
document.getElementById("today").textContent=todayText();

const app = document.getElementById("app");
const title = document.getElementById("pageTitle");
let currentPage = "dashboard";

function setPage(page){
  currentPage=page;
  const titles={
    dashboard:"Dashboard",operations:"Operations",master:"Master Data",
    inbound:"Inbound",outbound:"Outbound",items:"Item Master",suppliers:"Supplier",
    locations:"Location",inventory:"Inventory",stock:"Stock On-hand",
    lots:"Lot / Batch",reorder:"Reorder Point",fifo:"FIFO / FEFO"
  };
  title.textContent=titles[page]||"Dashboard";
  document.querySelectorAll(".menu-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page || 
    (page==="inbound"||page==="outbound") && b.dataset.page==="operations" ||
    ["items","suppliers","locations"].includes(page) && b.dataset.page==="master" ||
    ["stock","lots","reorder","fifo"].includes(page) && b.dataset.page==="inventory"
  ));
  document.querySelectorAll(".submenu button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  if(["inbound","outbound"].includes(page)||["items","suppliers","locations"].includes(page)||["stock","lots","reorder","fifo"].includes(page)){
    const parent = page==="inbound"||page==="outbound" ? "operations" : ["items","suppliers","locations"].includes(page) ? "master" : "inventory";
    document.querySelectorAll(".menu-group").forEach(g=>{
      const btn=g.querySelector(".menu-item");
      if(btn.dataset.page===parent) g.classList.add("open");
    });
  }
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll(".menu-item").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const group=btn.parentElement;
    if(group.classList.contains("menu-group")) group.classList.toggle("open");
    setPage(btn.dataset.page);
  });
});
document.querySelectorAll(".submenu button").forEach(btn=>btn.addEventListener("click",()=>setPage(btn.dataset.page)));

document.getElementById("resetBtn").addEventListener("click",()=>{
  if(confirm("รีเซ็ตข้อมูลตัวอย่างทั้งหมดหรือไม่?")){localStorage.removeItem(STORAGE_KEY);state=loadState();setPage("dashboard");toast("รีเซ็ตข้อมูลเรียบร้อย");}
});

function totalStock(){return state.items.reduce((s,i)=>s+i.stock,0)}
function lowStock(){return state.items.filter(i=>i.stock<=i.rop)}
function byZone(z){return state.items.filter(i=>i.zone===z)}
function transactionCount(type){return state.transactions.filter(t=>t.type===type).length}

function render(){
  const views={dashboard:renderDashboard,operations:renderOperations,master:renderMaster,
    inbound:()=>renderFlow("IN"),outbound:()=>renderFlow("OUT"),
    items:renderItems,suppliers:renderSuppliers,locations:renderLocations,
    inventory:renderInventory,stock:renderStock,lots:renderLots,reorder:renderReorder,fifo:renderFifo};
  (views[currentPage]||renderDashboard)();
}

function renderDashboard(){
  const zoneStats=zoneInfo.map(z=>({z:z.zone,n:byZone(z.zone).reduce((s,i)=>s+i.stock,0)}));
  const max=Math.max(...zoneStats.map(x=>x.n),1);
  app.innerHTML=`
    <div class="grid kpi-grid">
      ${kpi("Stock On-hand",totalStock(),"หน่วยสินค้า")}
      ${kpi("SKU ทั้งหมด",state.items.length,"SKU")}
      ${kpi("Inbound",transactionCount("IN"),"รายการรับเข้า")}
      ${kpi("Outbound",transactionCount("OUT"),"รายการจ่ายออก")}
      ${kpi("Reorder Alert",lowStock().length,"SKU ที่ต้องตรวจสอบ")}
    </div>

    <div class="grid two-col">
      <div class="card section">
        <div class="section-head"><div><h2>📊 Stock ตาม Zone</h2><p>ภาพรวมสินค้าคงเหลือในแต่ละพื้นที่</p></div></div>
        <div class="chart-bars">
          ${zoneStats.map(x=>`<div class="bar-wrap"><div class="bar-value">${moneyOrNumber(x.n)}</div><div class="bar" style="height:${Math.max(8,x.n/max*175)}px"></div><div class="bar-label">Zone ${x.z}</div></div>`).join("")}
        </div>
      </div>
      <div class="card section">
        <div class="section-head"><div><h2>⚠️ รายการที่ต้องติดตาม</h2><p>ระบบตรวจจาก Stock เทียบกับ Reorder Point</p></div></div>
        ${lowStock().slice(0,7).map(i=>`<div class="alert red"><span><b>${esc(i.sku)}</b> ${esc(i.description)}</span><span>เหลือ ${moneyOrNumber(i.stock)} / ROP ${moneyOrNumber(i.rop)}</span></div>`).join("") || '<div class="empty">ไม่มีรายการที่ต่ำกว่า ROP</div>'}
      </div>
    </div>

    <div class="card section">
      <div class="section-head"><div><h2>📋 สรุปการดำเนินงานล่าสุด</h2><p>รายการรับเข้าและจ่ายออกล่าสุด</p></div><button class="btn btn-secondary" onclick="setPage('inbound')">ดูทั้งหมด</button></div>
      ${transactionTable(state.transactions.slice().reverse().slice(0,8))}
    </div>
  `;
}

function kpi(label,value,hint){return `<div class="card kpi"><div class="label">${label}</div><div class="value">${moneyOrNumber(value)}</div><div class="hint">${hint}</div></div>`}

function renderOperations(){
  app.innerHTML=`
    <div class="grid info-grid">
      <div class="card info-card"><div class="muted">Inbound</div><div class="big">${transactionCount("IN")}</div><div class="small muted">รายการรับเข้า</div></div>
      <div class="card info-card"><div class="muted">Outbound</div><div class="big">${transactionCount("OUT")}</div><div class="small muted">รายการจ่ายออก</div></div>
      <div class="card info-card"><div class="muted">SKU ต่ำกว่า ROP</div><div class="big">${lowStock().length}</div><div class="small muted">ต้องสั่งซื้อ/ตรวจสอบ</div></div>
      <div class="card info-card"><div class="muted">Stock ทั้งหมด</div><div class="big">${moneyOrNumber(totalStock())}</div><div class="small muted">หน่วยสินค้า</div></div>
    </div>
    <div class="grid two-col" style="margin-top:18px">
      <div class="card section">
        <div class="section-head"><div><h2>📥 Inbound</h2><p>รับสินค้าและ Put-away</p></div><button class="btn btn-primary" onclick="setPage('inbound')">เปิด Inbound</button></div>
        <p class="muted">กรอก SKU + จำนวน → ระบบเพิ่ม Stock และผูก Zone/Location ให้โดยอัตโนมัติ</p>
      </div>
      <div class="card section">
        <div class="section-head"><div><h2>📤 Outbound</h2><p>Picking และ Shipping</p></div><button class="btn btn-primary" onclick="setPage('outbound')">เปิด Outbound</button></div>
        <p class="muted">กรอก SKU + จำนวน → ระบบตรวจ Stock และตัด Stock อัตโนมัติ</p>
      </div>
    </div>
  `;
}

function renderMaster(){
  app.innerHTML=`
    <div class="card section">
      <div class="tabs">
        <button class="tab active" onclick="setPage('items')">Item Master</button>
        <button class="tab" onclick="setPage('suppliers')">Supplier</button>
        <button class="tab" onclick="setPage('locations')">Location</button>
      </div>
      <p class="muted">Master Data รวมข้อมูลสินค้า ผู้ขาย และตำแหน่งจัดเก็บ</p>
    </div>`;
}

function renderItems(){
  app.innerHTML=`
    <div class="card section">
      <div class="section-head"><div><h2>Item Master</h2><p>ข้อมูล SKU จำนวน 100 รายการ แบ่งตาม Zone</p></div><button class="btn btn-secondary" onclick="setPage('master')">← Master Data</button></div>
      <div class="toolbar"><input class="search" id="itemSearch" placeholder="ค้นหา SKU / ชื่อสินค้า / Zone..." oninput="filterItems()"></div>
      <div class="table-wrap"><table id="itemTable"><thead><tr><th>SKU</th><th>Barcode</th><th>Description</th><th>UOM</th><th>Category</th><th>Zone</th><th>Location</th><th>ROP</th></tr></thead><tbody>
      ${state.items.map(i=>`<tr><td><b>${esc(i.sku)}</b></td><td>${esc(i.barcode)}</td><td>${esc(i.description)}</td><td>${esc(i.uom)}</td><td>${esc(i.category)}</td><td><span class="pill-zone">${i.zone}</span></td><td>${esc(i.location)}</td><td>${moneyOrNumber(i.rop)}</td></tr>`).join("")}
      </tbody></table></div>
    </div>`;
}
function filterItems(){
  const q=document.getElementById("itemSearch").value.toLowerCase();
  document.querySelectorAll("#itemTable tbody tr").forEach(tr=>tr.style.display=tr.innerText.toLowerCase().includes(q)?"":"none");
}

function renderSuppliers(){
  app.innerHTML=`
    <div class="card section">
      <div class="section-head"><div><h2>Supplier Master</h2><p>ข้อมูลผู้ขาย</p></div></div>
      ${simpleTable(["Supplier Code","Supplier Name","Contact"],suppliers.map(s=>[s.code,s.name,s.contact]))}
    </div>`;
}
function renderLocations(){
  app.innerHTML=`
    <div class="card section">
      <div class="section-head"><div><h2>Location Master</h2><p>กำหนดพื้นที่ตามประเภทสินค้า</p></div></div>
      ${simpleTable(["Zone","สินค้า","รายละเอียด","ตัวอย่าง Location"],zoneInfo.map(z=>[z.zone,z.name,z.description,`${z.zone}-R01-L01-B01`]))}
    </div>`;
}

function renderFlow(type){
  const inbound=type==="IN";
  const titleText=inbound?"Inbound — Receiving / Put-away":"Outbound — Picking / Shipping";
  const actionText=inbound?"รับสินค้าเข้าคลัง":"จ่ายสินค้าออกจากคลัง";
  app.innerHTML=`
    <div class="card section">
      <div class="section-head">
        <div><h2>${inbound?"📥":"📤"} ${titleText}</h2><p>${inbound?"สแกน QR ที่พาเลทเพื่อดึง SKU / จำนวน / Zone / Location แล้วรับเข้า Stock อัตโนมัติ":"กรอก SKU / Barcode หรือสแกน QR เพื่อจ่ายสินค้า ระบบตรวจจำนวนและตัด Stock อัตโนมัติ"}</p></div>
        <div class="page-actions">
          <button class="btn btn-secondary" type="button" onclick="openQrScanner('${type}')">📷 สแกน QR</button>
          ${inbound?'<button class="btn btn-secondary" type="button" onclick="openPalletQr()">🏷️ ดู QR พาเลท</button>':''}
        </div>
      </div>
      <form id="flowForm">
        <div class="form-grid">
          ${inbound?'<div class="field"><label>Pallet ID</label><input id="palletId" placeholder="เช่น PLT-00001"></div>':''}
          <div class="field"><label>SKU / Barcode</label><input id="flowSku" list="skuList" placeholder="เช่น PENCIL-001 หรือสแกน Barcode" required autofocus></div>
          <div class="field"><label>จำนวน</label><input id="flowQty" type="number" min="1" placeholder="จำนวน" required></div>
          <div class="field"><label>Zone</label><select id="flowZone">${zoneInfo.map(z=>`<option value="${z.zone}">Zone ${z.zone} — ${z.name}</option>`).join("")}</select></div>
          <div class="field"><label>Location</label><input id="flowLocation" placeholder="ระบบเลือกให้อัตโนมัติ"></div>
        </div>
        <datalist id="skuList">${state.items.map(i=>`<option value="${i.sku}">${i.description}</option><option value="${i.barcode}">${i.sku}</option>`).join("")}</datalist>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:13px;gap:10px;flex-wrap:wrap">
          <div id="skuPreview" class="muted small">${inbound?'สแกน QR ที่พาเลท หรือเลือก SKU เพื่อดูข้อมูลสินค้า':'เลือก SKU เพื่อดู Zone / Stock ปัจจุบัน'}</div>
          <button class="btn btn-${inbound?"primary":"danger"}" type="submit">${actionText}</button>
        </div>
      </form>
    </div>

    ${inbound?`<div class="card section">
      <div class="section-head"><div><h2>🏷️ พาเลทที่รอรับเข้า</h2><p>ตัวอย่างข้อมูลสำหรับทดสอบ QR Code</p></div></div>
      ${palletTable((state.pallets||[]).filter(p=>p.status!=="RECEIVED").slice(0,10))}
    </div>`:""}

    <div class="card section">
      <div class="section-head"><div><h2>ประวัติ ${inbound?"รับเข้า":"จ่ายออก"}</h2><p>รายการล่าสุดของระบบ</p></div></div>
      ${transactionTable(state.transactions.filter(t=>t.type===type).slice().reverse())}
    </div>`;

  const skuInput=document.getElementById("flowSku");
  const qtyInput=document.getElementById("flowQty");
  const zoneInput=document.getElementById("flowZone");
  const locInput=document.getElementById("flowLocation");
  const palletInput=document.getElementById("palletId");

  function findItem(){
    const q=skuInput.value.trim().toLowerCase();
    return state.items.find(i=>i.sku.toLowerCase()===q||i.barcode.toLowerCase()===q);
  }
  function findPallet(){
    if(!palletInput) return null;
    const q=palletInput.value.trim().toLowerCase();
    return (state.pallets||[]).find(p=>p.palletId.toLowerCase()===q);
  }
  function preview(){
    const pallet=findPallet();
    if(inbound && pallet){
      const item=state.items.find(i=>i.sku===pallet.sku);
      if(!item){toast("SKU ในพาเลทไม่พบใน Item Master",true);return;}
      skuInput.value=item.sku; qtyInput.value=pallet.qty; zoneInput.value=item.zone; locInput.value=item.location;
      document.getElementById("skuPreview").innerHTML=`<b>${esc(item.description)}</b> · Pallet <b>${esc(pallet.palletId)}</b> · จำนวน <b>${moneyOrNumber(pallet.qty)}</b> ${esc(item.uom)} · Zone ${item.zone} · Location ${esc(item.location)} · <span class="status warn">${pallet.status==="RECEIVED"?"รับเข้าแล้ว":"รอรับเข้า"}</span>`;
      return;
    }
    const item=findItem();
    if(!item){document.getElementById("skuPreview").textContent="ไม่พบ SKU/Barcode";return}
    zoneInput.value=item.zone; locInput.value=item.location;
    document.getElementById("skuPreview").innerHTML=`<b>${esc(item.description)}</b> · Zone ${item.zone} · Stock ปัจจุบัน <b>${moneyOrNumber(item.stock)}</b> · ROP ${moneyOrNumber(item.rop)}`;
  }
  skuInput.addEventListener("input",preview);
  skuInput.addEventListener("change",preview);
  if(palletInput){ palletInput.addEventListener("input",preview); palletInput.addEventListener("change",preview); }

  document.getElementById("flowForm").addEventListener("submit",e=>{
    e.preventDefault();
    const pallet=findPallet();
    const item=findItem(), qty=Number(qtyInput.value);
    if(!item){toast("ไม่พบ SKU หรือ Barcode",true);return}
    if(!qty || qty<1){toast("กรุณาระบุจำนวน",true);return}
    if(inbound && pallet && pallet.status==="RECEIVED"){toast("พาเลทนี้รับเข้าไปแล้ว ป้องกันการรับซ้ำ",true);return}
    if(!inbound && qty>item.stock){toast(`Stock ไม่พอ: มี ${item.stock} ${item.uom}`,true);return}
    if(inbound){ item.stock += qty; } else { item.stock -= qty; }
    if(inbound && pallet) pallet.status="RECEIVED";
    const now=new Date();
    state.transactions.push({
      id:(inbound?"IN-":"OUT-")+String(state.transactions.length+1).padStart(4,"0"),
      type,sku:item.sku,qty,zone:item.zone,location:item.location,
      palletId:inbound?(pallet?pallet.palletId:(palletInput?palletInput.value.trim():"")):"",
      date:now.toLocaleString("th-TH"),note:inbound?"รับสินค้าเข้าคลัง / QR Pallet":"จ่ายสินค้า / ตัด Stock"
    });
    saveState();
    toast(inbound?`รับ ${qty} ${item.uom} เข้า ${item.sku} แล้ว`:`ตัด Stock ${qty} ${item.uom} จาก ${item.sku} แล้ว`);
    setPage(currentPage);
  });
}

function palletTable(rows){
  if(!rows.length)return '<div class="empty">ไม่มีพาเลทที่รอรับเข้า</div>';
  return `<div class="table-wrap"><table><thead><tr><th>Pallet ID</th><th>SKU</th><th>สินค้า</th><th>จำนวน</th><th>Zone</th><th>Location</th><th>สถานะ</th><th>QR</th></tr></thead><tbody>
  ${rows.map(p=>{const item=state.items.find(i=>i.sku===p.sku);return `<tr><td><b>${esc(p.palletId)}</b></td><td>${esc(p.sku)}</td><td>${esc(item?item.description:"-")}</td><td>${moneyOrNumber(p.qty)}</td><td>${esc(p.zone)}</td><td>${esc(p.location)}</td><td><span class="status warn">รอรับเข้า</span></td><td><button class="btn btn-secondary" onclick="showPalletQr('${esc(p.palletId)}')">แสดง QR</button></td></tr>`}).join("")}
  </tbody></table></div>`;
}

let qrScanner=null;
async function openQrScanner(type="IN"){
  const old=document.getElementById("qrModal"); if(old) old.remove();
  document.body.insertAdjacentHTML("beforeend",`<div class="qr-modal" id="qrModal"><div class="qr-card"><div class="qr-head"><div><h2>📷 สแกน QR Code</h2><p>สแกน QR ที่ติดบนพาเลท</p></div><button class="icon-btn" onclick="closeQrScanner()">✕</button></div><div id="qr-reader"></div><div class="qr-help">ถ้ากล้องใช้ไม่ได้ ให้กรอก Pallet ID ด้านล่าง</div><div class="qr-manual"><input id="manualPallet" placeholder="เช่น PLT-00001"><button class="btn btn-primary" onclick="useManualQr('${type}')">ใช้รหัสนี้</button></div></div></div>`);
  try{
    if(typeof Html5Qrcode === "undefined") throw new Error("QR library not loaded");
    qrScanner=new Html5Qrcode("qr-reader");
    await qrScanner.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:250}},text=>handleQrResult(text,type));
  }catch(e){
    document.getElementById("qr-reader").innerHTML=`<div class="qr-error">เปิดกล้องไม่ได้ในตอนนี้<br><small>${esc(e.message||"")}</small></div>`;
  }
}
async function handleQrResult(text,type){
  const value=String(text||"").trim();
  if(!value)return;
  const palletId=value.startsWith("WMS-PALLET:")?value.replace("WMS-PALLET:","").trim():value;
  const pallet=(state.pallets||[]).find(p=>p.palletId.toLowerCase()===palletId.toLowerCase());
  if(!pallet){toast(`ไม่พบพาเลท ${palletId}`,true);return;}
  await closeQrScanner();
  if(type==="IN"){
    setPage("inbound");
    setTimeout(()=>{const p=document.getElementById("palletId"); if(p){p.value=pallet.palletId;p.dispatchEvent(new Event("input"));}},50);
  }else{
    setPage("outbound");
    setTimeout(()=>{const s=document.getElementById("flowSku"); if(s){s.value=pallet.sku;s.dispatchEvent(new Event("input"));}},50);
  }
  toast(`สแกน ${pallet.palletId} สำเร็จ`);
}
async function closeQrScanner(){
  if(qrScanner){try{await qrScanner.stop();}catch(e){} try{qrScanner.clear();}catch(e){} qrScanner=null;}
  const m=document.getElementById("qrModal"); if(m)m.remove();
}
function useManualQr(type){const v=document.getElementById("manualPallet")?.value.trim(); if(v)handleQrResult(v,type);}
function openPalletQr(){
  const rows=(state.pallets||[]).filter(p=>p.status!=="RECEIVED");
  if(!rows.length){toast("ไม่มีพาเลทที่รอรับเข้า",true);return;}
  showPalletQr(rows[0].palletId);
}
function showPalletQr(palletId){
  const pallet=(state.pallets||[]).find(p=>p.palletId===palletId); if(!pallet)return;
  const item=state.items.find(i=>i.sku===pallet.sku);
  const old=document.getElementById("palletQrModal"); if(old)old.remove();
  document.body.insertAdjacentHTML("beforeend",`<div class="qr-modal" id="palletQrModal"><div class="qr-card qr-print"><div class="qr-head"><div><h2>🏷️ QR พาเลท ${esc(pallet.palletId)}</h2><p>${esc(item?item.description:pallet.sku)} · ${moneyOrNumber(pallet.qty)} ${esc(item?item.uom:"ชิ้น")}</p></div><button class="icon-btn" onclick="document.getElementById('palletQrModal').remove()">✕</button></div><div class="qr-code" id="palletQrCode"></div><div class="qr-pallet-text"><b>${esc(pallet.palletId)}</b><br>SKU: ${esc(pallet.sku)} · Zone ${esc(pallet.zone)}<br>Location: ${esc(pallet.location)}</div><button class="btn btn-primary" onclick="window.print()">🖨️ พิมพ์ QR</button></div></div>`);
  if(typeof QRCode!=="undefined") new QRCode(document.getElementById("palletQrCode"),{text:`WMS-PALLET:${pallet.palletId}`,width:220,height:220});
  else document.getElementById("palletQrCode").innerHTML="QR library ไม่พร้อมใช้งาน";
}

function transactionTable(rows){
  if(!rows.length)return '<div class="empty">ยังไม่มีรายการ</div>';
  return `<div class="table-wrap"><table><thead><tr><th>Transaction</th><th>ประเภท</th><th>SKU</th><th>จำนวน</th><th>Zone</th><th>Location</th><th>Pallet</th><th>วันที่</th><th>หมายเหตุ</th></tr></thead><tbody>
  ${rows.map(t=>`<tr><td><b>${t.id}</b></td><td><span class="status ${t.type==="IN"?"ok":"bad"}">${t.type==="IN"?"INBOUND":"OUTBOUND"}</span></td><td>${esc(t.sku)}</td><td>${moneyOrNumber(t.qty)}</td><td>${t.zone}</td><td>${esc(t.location)}</td><td>${esc(t.palletId||"-")}</td><td>${esc(t.date)}</td><td>${esc(t.note)}</td></tr>`).join("")}
  </tbody></table></div>`;
}

function renderInventory(){
  app.innerHTML=`
    <div class="card section">
      <div class="tabs">
        <button class="tab active" onclick="setPage('stock')">Stock On-hand</button>
        <button class="tab" onclick="setPage('lots')">Lot / Batch</button>
        <button class="tab" onclick="setPage('reorder')">Reorder Point</button>
        <button class="tab" onclick="setPage('fifo')">FIFO / FEFO</button>
      </div>
      <p class="muted">ข้อมูล Inventory เชื่อมกับการรับเข้าและจ่ายออกแบบอัตโนมัติ</p>
    </div>`;
}
function renderStock(){
  app.innerHTML=`<div class="card section"><div class="section-head"><div><h2>Stock On-hand</h2><p>ยอดคงเหลือปัจจุบัน แยกตาม SKU และ Location</p></div></div>${inventoryTable(state.items)}</div>`;
}
function inventoryTable(rows){
  return `<div class="table-wrap"><table><thead><tr><th>SKU</th><th>สินค้า</th><th>Zone</th><th>Location</th><th>On-hand</th><th>ROP</th><th>สถานะ</th></tr></thead><tbody>
  ${rows.map(i=>`<tr><td><b>${esc(i.sku)}</b></td><td>${esc(i.description)}</td><td><span class="pill-zone">${i.zone}</span></td><td>${esc(i.location)}</td><td><b>${moneyOrNumber(i.stock)}</b> ${i.uom}</td><td>${moneyOrNumber(i.rop)}</td><td>${i.stock<=i.rop?'<span class="status bad">ต่ำกว่า ROP</span>':'<span class="status ok">ปกติ</span>'}</td></tr>`).join("")}
  </tbody></table></div>`;
}
function renderLots(){
  app.innerHTML=`<div class="card section"><div class="section-head"><div><h2>Lot / Batch</h2><p>ตรวจสอบ Lot และวันหมดอายุย้อนหลัง</p></div></div>
  ${simpleTable(["Lot / Batch","SKU","Zone","Qty","Production","Expiry","สถานะ"],state.items.map(i=>[i.lot,i.sku,i.zone,i.stock,i.expiry? "01/10/2026":"-",i.expiry||"-",i.expiry&&new Date(i.expiry)<new Date("2027-03-01")?"⚠ ใกล้หมดอายุ":"ปกติ"]))}
  </div>`;
}
function renderReorder(){
  const rows=state.items.filter(i=>i.stock<=i.rop);
  app.innerHTML=`<div class="card section"><div class="section-head"><div><h2>Reorder Point</h2><p>รายการที่ Stock ถึงจุดสั่งซื้อใหม่</p></div><span class="status ${rows.length?"bad":"ok"}">${rows.length} SKU</span></div>
  ${rows.length?simpleTable(["SKU","สินค้า","Zone","Stock","ROP","ขาดจาก ROP","คำแนะนำ"],rows.map(i=>[i.sku,i.description,i.zone,i.stock,i.rop,i.rop-i.stock,"สั่งซื้อ/เติม Stock"])):'<div class="empty">ไม่มีสินค้าใดต่ำกว่า Reorder Point</div>'}</div>`;
}
function renderFifo(){
  const rows=state.items.slice().sort((a,b)=>(a.expiry||"9999-99-99").localeCompare(b.expiry||"9999-99-99"));
  app.innerHTML=`<div class="card section"><div class="section-head"><div><h2>FIFO / FEFO</h2><p>แนะนำลำดับการหยิบสินค้า โดย FEFO ให้ความสำคัญกับวันหมดอายุก่อน</p></div></div>
  ${simpleTable(["ลำดับ","SKU","สินค้า","Lot","Expiry","Zone","คำแนะนำ"],rows.map((i,idx)=>[idx+1,i.sku,i.description,i.lot,i.expiry||"-",i.zone,i.expiry?"หยิบ Lot นี้ก่อนตาม FEFO":"หยิบ Lot เก่าก่อนตาม FIFO"]))}</div>`;
}

function simpleTable(headers,rows){
  return `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function toast(msg,error=false){
  const t=document.getElementById("toast");
  t.textContent=msg;t.style.background=error?"#a92e38":"#173f73";t.classList.add("show");
  clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),2600);
}

render();
