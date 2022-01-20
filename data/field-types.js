const TYPE_OPTIONS_UNORDERED = 'options-unordered'; // supports: optional, saveable, other-option
const TYPE_TEXT_SHORT = 'text-short'; // supports: optional, saveable, context, help-text, examples
const TYPE_TEXT_LONG = 'text-long'; // can grow in height; supports: optional, saveable, context, help-text, examples
const TYPE_TEXT_DATE = 'text-date'; // supports: optional, saveable, context, help-text, examples
const TYPE_TEXT_PHONE_NUM = 'text-phone-number'; // supports: optional, saveable, context, help-text, examples
const TYPE_IMAGE_UPLOAD = 'image-upload'; // supports: optional, saveable
const TYPE_IMAGE_DRAW = 'image-draw'; // image-upload as fallback; supports: optional, saveable

module.exports = {
  TYPE_OPTIONS_UNORDERED,
  TYPE_TEXT_SHORT,
  TYPE_TEXT_LONG,
  TYPE_TEXT_DATE,
  TYPE_TEXT_PHONE_NUM,
  TYPE_IMAGE_UPLOAD,
  TYPE_IMAGE_SIGNATURE,
};
