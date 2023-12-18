import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { LanguageListUnion, languageSet } from '../../const/language';


type Props = {
  callback: React.Dispatch<React.SetStateAction<LanguageListUnion | null>>;
}

const Select = React.memo(({ callback }: Props) => {
  const [currentLang, setCurrentLang] = React.useState<LanguageListUnion | null>(null);

  const handleChange = React.useCallback((event: SelectChangeEvent) => {
    const langName = event.target.value as LanguageListUnion;

    setCurrentLang(langName);
    callback(langName);
  }, [callback]);

  return (
    <FormControl fullWidth size='small'>
      <InputLabel>lang</InputLabel>
      <MuiSelect
        onChange={handleChange}
        value={currentLang ?? ''}
      >
        {
          Object.keys(languageSet).map((item, key)=> (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))
        }
      </MuiSelect>
    </FormControl>
  )
});

export { Select }