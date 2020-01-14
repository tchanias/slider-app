import React,{useState} from 'react';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {Pages,HomeSections} from '../../Const'; 
  const useStyles = {
      position: 'relative',
      opacity:'0.9',
      backgroundColor: '#333',
      border: '2px solid #000',
      width:'100%',
      height:'100%',

    //   top: `0`,
    //   left: `0`,
    //   bottom:'0',
    //   right:'0',
    };


export default function Search(props) {
    const [inputValue,setInputValue] = useState('');
    const [modalState,setModalState]= useState(false);
    const navPageSelected = function(page){
        setInputValue(page);
        setModalState(false);
        props.navigateTo(page);
    }
    const navigateSectionSelected= function(section,index){
        setInputValue(section);
        setModalState(false);
        props.navigateTo(section,index);
    }
    return (
        <div className={'search-sub-container'} >
            <SearchIcon onClick={()=>setModalState(true)}/>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={modalState}
                onClose={()=>{return false}}
            >
                <div style={useStyles} className={'modal'}>
                    <div className={'close-button'} onClick={()=>setModalState(false)}>
                        <HighlightOffIcon/>
                    </div>
                    <div className={'results-container'}>
                        <div className={'search-input'}>
                            <Input
                                value={inputValue}
                                onChange={(value)=>{setInputValue(value.value)}}
                            />
                        </div>
                        <div className={'search-results'}>
                            <div>
                               {Object.keys(Pages).map((page,index)=>{
                                    return(
                                    <div key={index}>
                                        <div className={'main-page'}  onClick={()=>{navPageSelected(page)}}>{Pages[page]}</div>
                                        { Pages[page]==='Home'?
                                        Object.keys(HomeSections).map((section,index)=>{
                                            return <div className={'section'} onClick={()=>{navigateSectionSelected(page)}}>{HomeSections[section]}</div>
                                        }):null

                                        }
                                    </div>)
                                })

                               } 
                            </div> 
                        </div>
                    </div>
                   
                </div>
            </Modal>
        </div>
    )
}
