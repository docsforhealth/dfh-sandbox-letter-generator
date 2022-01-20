const Types = require('./field-types');

const PREVENTING_INCARCERATION = [
  {
    name: 'About the patient',
    fields: [
      {
        key: 'patient-name',
        type: Types.TYPE_TEXT_SHORT,
        title: 'Patient name',
        placeholder: 'Example: John Doe',
      },
      {
        key: 'pronouns',
        type: Types.TYPE_OPTIONS_UNORDERED,
        title: 'Pronouns',
        options: [
          {
            label: 'He/Him',
            value: {
              subject: 'he',
              object: 'him',
              possessive: 'his',
            },
          },
          {
            label: 'She/Her',
            value: {
              subject: 'she',
              object: 'her',
              possessive: 'hers',
            },
          },
          {
            label: 'They/Them',
            value: {
              subject: 'they',
              object: 'them',
              possessive: 'theirs',
            },
          },
        ],
        // Can accept nested array of field definitions
        // Only Types.TYPE_TEXT_* and Types.TYPE_OPTIONS_* supported
        other: [
          {
            key: 'subject',
            type: Types.TYPE_TEXT_SHORT,
            title: 'Subject pronoun',
            placeholder: 'Example: she',
          },
          {
            key: 'object',
            type: Types.TYPE_TEXT_SHORT,
            title: 'Object pronoun',
            placeholder: 'Example: her',
          },
          {
            key: 'possessive',
            type: Types.TYPE_TEXT_SHORT,
            title: 'Possessive pronoun',
            placeholder: 'Example: hers',
          },
        ],
      },
      {
        key: 'dob',
        type: Types.TYPE_TEXT_DATE,
        title: 'Date of birth',
        placeholder: 'MM/DD/YYYY',
        format: 'MM/DD/YYYY',
      },
      {
        key: 'conditions-aggravated-by-incarceration',
        type: Types.TYPE_TEXT_LONG,
        rows: 2,
        title:
          'Conditions that you believe would be aggravated by incarceration',
        placeholder: 'Your response here...',
        contextBefore: true,
        help:
          'Please list the medical and mental health conditions that you believe incarceration would exacerbate. It is reasonable to list the patient’s entire medical history here.',
      },
      {
        key: 'strengths-accomplishments',
        type: Types.TYPE_TEXT_LONG,
        rows: 2,
        title: 'Strengths and recent accomplishments',
        placeholder: 'Your response here...',
        contextBefore: true,
        help:
          'Please describe any improvements the patient has made to their overall health or life. This is your opportunity to describe your patient’s strengths.',
        examples: [
          'adhering to appointments and medications, exercising, and eating healthier',
          'taking medications, caring for family members, and remaining in recovery from substance use',
        ],
      },
    ],
  },
  {
    name: 'About you',
    fields: [
      {
        key: 'name-credentials',
        type: Types.TYPE_TEXT_SHORT,
        save: true,
        title: 'Your name and credentials',
        placeholder: 'Example: Iam A Doctor, MD',
      },
      {
        key: 'clinic-name',
        type: Types.TYPE_TEXT_SHORT,
        save: true,
        title: 'Clinic name',
        placeholder: 'Example: Main St Clinic',
      },
      {
        key: 'clinic-address',
        type: Types.TYPE_TEXT_LONG,
        rows: 2,
        save: true,
        title: 'Clinic address',
        placeholder: 'Example: 1234 Main St, Providence, RI, 02903',
      },
      {
        key: 'clinic-phone-number',
        type: Types.TYPE_TEXT_PHONE_NUM,
        optional: true,
        save: true,
        title: 'Clinic phone number',
        placeholder: '(###) ### - ####',
        format: '(###) ### - ####',
      },
      {
        key: 'letterhead',
        type: Types.TYPE_IMAGE_UPLOAD,
        optional: true,
        save: true,
        title: 'Letterhead',
        upload: 'Upload your letterhead',
      },
      {
        key: 'signature',
        type: Types.TYPE_IMAGE_DRAW,
        optional: true,
        save: true,
        title: 'Your signature',
        draw: 'Sign here...',
        upload: 'Upload your signature',
      },
    ],
  },
];

module.exports = {
  PREVENTING_INCARCERATION,
};
