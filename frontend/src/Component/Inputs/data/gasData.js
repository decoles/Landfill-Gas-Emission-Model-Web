//For gasses input
const gasData = [
  {
    name: "Total landfill gas",
    concentration: 0,
    molecularWeight: 30.03,
  },
  {
    name: "Methane",
    concentration: 0,
    molecularWeight: 16.04,
  },
  {
    name: "Carbon dioxide",
    concentration: 0,
    molecularWeight: 44.01,
  },
  {
    name: "NMOC",
    concentration: 4000,
    molecularWeight: 86.18,
  },
  {
    name: "1;1;1-Trichloroethane (methyl chloroform) - HAP",
    concentration: 0.48,
    molecularWeight: 133.41,
  },
  {
    name: "1;1;2;2-Tetrachloroethane - HAP/VOC",
    concentration: 1.1,
    molecularWeight: 167.85,
  },

  {
    name: "1;1-Dichloroethane (ethylidene dichloride) - HAP/VOC",
    concentration: 2.4,
    molecularWeight: 98.97,
  },
  {
    name: "1;1-Dichloroethene (vinylidene chloride) - HAP/VOC",
    concentration: 0.2,
    molecularWeight: 96.94,
  },
  {
    name: "1;2-Dichloroethane (ethylene dichloride) - HAP/VOC",
    concentration: 0.41,
    molecularWeight: 98.96,
  },
  {
    name: "1;2-Dichloropropane (propylene dichloride) - HAP/VOC",
    concentration: 0.18,
    molecularWeight: 112.99,
  },
  {
    name: "2-Propanol (isopropyl alcohol) - VOC",
    concentration: 50,
    molecularWeight: 60.11,
  },
  {
    name: "Acetone",
    concentration: 7,
    molecularWeight: 58.08,
  },
  {
    name: "Acrylonitrile - HAP/VOC",
    concentration: 6.3,
    molecularWeight: 53.06,
  },
  {
    name: "Benzene - No or Unknown Co-disposal - HAP/VOC",
    concentration: 1.9,
    molecularWeight: 78.11,
  },
  {
    name: "Benzene - Co-disposal - HAP/VOC",
    concentration: 11,
    molecularWeight: 78.11,
  },
  {
    name: "Bromodichloromethane - VOC",
    concentration: 3.1,
    molecularWeight: 163.83,
  },

  {
    name: "Butane - VOC",
    concentration: 5,
    molecularWeight: 58.12,
  },
  {
    name: "Carbon disulfide - HAP/VOC",
    concentration: 0.58,
    molecularWeight: 76.13,
  },
  {
    name: "Carbon monoxide",
    concentration: 140,
    molecularWeight: 28.01,
  },

  {
    name: "Carbon tetrachloride - HAP/VOC",
    concentration: 0.004,
    molecularWeight: 153.84,
  },

  {
    name: "Carbonyl sulfide - HAP/VOC",
    concentration: 0.49,
    molecularWeight: 60.07,
  },

  {
    name: "Chlorobenzene - HAP/VOC",
    concentration: 0.25,
    molecularWeight: 112.56,
  },

  {
    name: "Chlorodifluoromethane",
    concentration: 1.3,
    molecularWeight: 86.47,
  },

  {
    name: "Chloroethane (ethyl chloride) - HAP/VOC",
    concentration: 1.3,
    molecularWeight: 64.52,
  },

  {
    name: "Chloroform - HAP/VOC",
    concentration: 0.03,
    molecularWeight: 119.39,
  },

  {
    name: "Chloromethane - VOC",
    concentration: 1.2,
    molecularWeight: 50.49,
  },

  {
    name: "Dichlorobenzene - (HAP for para isomer/VOC)",
    concentration: 0.21,
    molecularWeight: 147,
  },

  {
    name: "Dichlorodifluoromethane",
    concentration: 16,
    molecularWeight: 120.91,
  },

  {
    name: "Dichlorofluoromethane - VOC",
    concentration: 2.6,
    molecularWeight: 102.92,
  },

  {
    name: "Dichloromethane (methylene chloride) - HAP",
    concentration: 14,
    molecularWeight: 84.94,
  },

  {
    name: "Dimethyl sulfide (methyl sulfide) - VOC",
    concentration: 7.8,
    molecularWeight: 62.13,
  },

  {
    name: "Ethane",
    concentration: 890,
    molecularWeight: 30.07,
  },

  {
    name: "Ethanol - VOC",
    concentration: 27,
    molecularWeight: 46.08,
  },

  {
    name: "Ethyl mercaptan (ethanethiol) - VOC",
    concentration: 2.3,
    molecularWeight: 62.13,
  },

  {
    name: "Ethylbenzene - HAP/VOC",
    concentration: 4.6,
    molecularWeight: 106.16,
  },

  {
    name: "Ethylene dibromide - HAP/VOC",
    concentration: 0.001,
    molecularWeight: 187.88,
  },

  {
    name: "Fluorotrichloromethane - VOC",
    concentration: 0.76,
    molecularWeight: 137.38,
  },

  {
    name: "Hexane - HAP/VOC",
    concentration: 6.6,
    molecularWeight: 86.18,
  },

  {
    name: "Hydrogen sulfide",
    concentration: 36,
    molecularWeight: 34.08,
  },

  {
    name: "Mercury (total) - HAP",
    concentration: 0.00029,
    molecularWeight: 200.61,
  },

  {
    name: "Methyl ethyl ketone - HAP/VOC",
    concentration: 7.1,
    molecularWeight: 72.11,
  },

  {
    name: "Methyl isobutyl ketone - HAP/VOC",
    concentration: 1.9,
    molecularWeight: 100.16,
  },

  {
    name: "Methyl mercaptan - VOC",
    concentration: 2.5,
    molecularWeight: 48.11,
  },

  {
    name: "Pentane - VOC",
    concentration: 3.3,
    molecularWeight: 72.15,
  },

  {
    name: "Perchloroethylene (tetrachloroethylene) - HAP",
    concentration: 3.7,
    molecularWeight: 165.83,
  },

  {
    name: "Propane - VOC",
    concentration: 11,
    molecularWeight: 44.09,
  },

  {
    name: "t-1;2-Dichloroethene - VOC",
    concentration: 2.8,
    molecularWeight: 96.94,
  },

  {
    name: "Toluene - No or Unknown Co-disposal - HAP/VOC",
    concentration: 39,
    molecularWeight: 92.13,
  },

  {
    name: "Toluene - Co-disposal - HAP/VOC",
    concentration: 170,
    molecularWeight: 92.13,
  },

  {
    name: "Trichloroethylene (trichloroethene) - HAP/VOC",
    concentration: 2.8,
    molecularWeight: 131.4,
  },

  {
    name: "Vinyl chloride - HAP/VOC",
    concentration: 7.3,
    molecularWeight: 62.5,
  },

  {
    name: "Xylenes - HAP/VOC",
    concentration: 12,
    molecularWeight: 106.16,
  },
];

export default  gasData ;
