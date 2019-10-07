
import React,{useState} from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../../i18n'
import {makeStyles} from '@material-ui/core/styles';
import { useTranslation} from 'react-i18next';
import FormHelperText from '@material-ui/core/FormHelperText';





const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // backgroundColor: 'white',
  },
  mainRoot: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // backgroundColor: 'white',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    color: theme.palette.white,
    // marginTop: theme.spacing(2),
  },
}));




export default function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const [selection, setSelection] = useState(i18n.language)
  const classes = useStyles();
  
  console.log('i18n', i18n)
  const changeLanguage = e => {
   i18n.changeLanguage(e.target.value);
   console.log('change', e.target.value)
   setSelection(e.target.value)
   };
  return (
    <div className={classes.mainRoot}>
         <Select color='inherit'
          value={selection}
          onChange={changeLanguage}
          displayEmpty
          name="language"
          className={classes.selectEmpty}

        >
          <MenuItem value='en'>{t('language-en')}</MenuItem>
          <MenuItem value='no'>{t('language-no')}</MenuItem>
          <MenuItem value='sw'>{t('language-se')}</MenuItem>
        </Select>
     </div>
  )
}
