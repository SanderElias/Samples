export const splitName = (
  baseName: string
): { prefix: string; subGroup: string; name: string; } => {
  const parts = baseName.split('/');
  if (parts.length === 1) {
    return {
      prefix: '',
      subGroup: '',
      name: baseName
    };
  } else if (parts.length === 2) {
    return {
      prefix: parts[0],
      subGroup: '',
      name: parts[1]
    };
  } else {
    return {
      prefix: parts[0],
      subGroup: parts[1],
      name: parts.slice(2).join('/')
    };
  }
};
