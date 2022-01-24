const Types = require('./field-types');

const PREVENTING_INCARCERATION = [
  {
    name: 'About the patient',
    fields: [
      {
        key: 'patient-name',
        type: Types.TYPE_TEXT_SHORT,
        label: 'Patient name',
        placeholder: 'Example: John Doe',
      },
      {
        key: 'pronouns',
        type: Types.TYPE_OPTIONS_UNORDERED,
        label: 'Pronouns',
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
            key: 'pronoun__subject',
            type: Types.TYPE_TEXT_SHORT,
            label: 'Subject pronoun',
            placeholder: 'Example: she',
          },
          {
            key: 'pronoun__object',
            type: Types.TYPE_TEXT_SHORT,
            label: 'Object pronoun',
            placeholder: 'Example: her',
          },
          {
            key: 'pronoun__possessive',
            type: Types.TYPE_TEXT_SHORT,
            label: 'Possessive pronoun',
            placeholder: 'Example: hers',
          },
        ],
      },
      {
        key: 'dob',
        type: Types.TYPE_TEXT_DATE,
        label: 'Date of birth',
        placeholder: 'MM/DD/YYYY',
        format: 'MM/DD/YYYY',
      },
      {
        key: 'conditions-aggravated-by-incarceration',
        type: Types.TYPE_TEXT_LONG,
        rows: 2,
        label:
          'Conditions that you believe would be aggravated by incarceration',
        placeholder: 'Your response here...',
        contextBefore: true,
        __sandboxContextBefore: 'Specifically, <span>Patient name</span> has the following conditions that are very likely to be exacerbated in a correctional setting:',
        help:
          'Please list the medical and mental health conditions that you believe incarceration would exacerbate. It is reasonable to list the patient’s entire medical history here.',
      },
      {
        key: 'strengths-accomplishments',
        type: Types.TYPE_TEXT_LONG,
        rows: 2,
        label: 'Strengths and recent accomplishments',
        placeholder: 'Your response here...',
        contextBefore: true,
        __sandboxContextBefore: 'Despite multiple social and other challenges, <span>Patient name</span> has recently done a remarkable job of',
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
        label: 'Your name and credentials',
        placeholder: 'Example: Iam A Doctor, MD',
      },
      {
        key: 'clinic-name',
        type: Types.TYPE_TEXT_SHORT,
        save: true,
        label: 'Clinic name',
        placeholder: 'Example: Main St Clinic',
      },
      {
        key: 'clinic-address',
        type: Types.TYPE_TEXT_LONG,
        rows: 2,
        save: true,
        label: 'Clinic address',
        placeholder: 'Example: 1234 Main St, Providence, RI, 02903',
      },
      {
        key: 'clinic-phone-number',
        type: Types.TYPE_TEXT_PHONE_NUM,
        optional: true,
        save: true,
        label: 'Clinic phone number',
        placeholder: '(###) ### - ####',
        format: '(###) ### - ####',
      },
      {
        key: 'letterhead',
        type: Types.TYPE_IMAGE_UPLOAD,
        optional: true,
        save: true,
        label: 'Letterhead',
        upload: 'Upload your letterhead',
      },
      {
        key: 'signature',
        type: Types.TYPE_IMAGE_DRAW,
        optional: true,
        save: true,
        label: 'Your signature',
        draw: 'Sign here...',
        upload: 'Upload your signature',
      },
    ],
  },
];

module.exports = {
  PREVENTING_INCARCERATION,
};
