import React from 'react';
import { StyleSheet,Button,TouchableOpacity, Text, TouchableHighlight,Modal, View,TextInput,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {AnimatedModal} from "react-native-modal-animated";



//main part

export default class App extends React.Component {
 

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

//rendering part
  render() {
    return (
      <View style={styles.container} className="background">

      <View style={styles.mainSection}>
        <Text style={styles.heading}>Daphnis labs</Text>
         <Text style={styles.heading}>Animation Task</Text>
        </View>

        <View style={styles.navBar}>
                  <View style={styles.barItems}>
                      
                          <FontAwesome style={{marginRight:20,padding:10}} className='hello'  name='home' size={30}>
                          </FontAwesome>
                          <FontAwesome style={{marginRight:20,padding:10}} name='user' size={30} />
                         
                          <TouchableOpacity>

                          <FontAwesome name='plus-circle' size={80} style={{color:'#2e4053'}} onPress={() => {this.setModalVisible(true);}}></FontAwesome>
                          
                          </TouchableOpacity>
                         
                         <FontAwesome style={{marginLeft:20,padding:10}} name='envelope-o' size={30} />
                          <FontAwesome style={{marginLeft:20,padding:10}} name='cog' size={30} />
                    
                  </View>
        </View>



                                          <AnimatedModal style={styles.outerView}
                                                                    visible={this.state.modalVisible}
                                                                    onBackdropPress={() => {
                                                                      this.setState({ modalVisible: false });
                                                                    }}
                                                                    animationType="horizontal"
                                                                    duration={600}
                                                                   >
                                                                                                  
                                               
                                              
                                             
                                                <View style={styles.formView}>


                                                  <Text style={styles.labels}>Add a Member</Text>


                                                  <FontAwesome style={styles.pic} name='camera' size={70} />

                                                      <TextInput style={styles.Inputs} placeholder='Name'
                                                      underlineColorAndroid={'transparent'}/>  


                                                  
                                                      <TextInput style={styles.Inputs} placeholder='Phone Number'
                                                      underlineColorAndroid={'transparent'} />  


                                                    
                                                      <TextInput style={styles.Inputs} placeholder='Email Address'
                                                      underlineColorAndroid={'transparent'} secureTextEntry={true} /> 


                                                      
                                                      <TextInput style={styles.Inputs} placeholder='Address'
                                                      underlineColorAndroid={'transparent'} />                                                 
                                                          


                                                        <TouchableOpacity style={styles.submit} 
                                                            onPress={() => {this.setModalVisible(false);}}>

                                                    <FontAwesome style={{marginLeft:20,padding:10}} name='check-circle' size={60} />

                                                            </TouchableOpacity>
                                     
                                                </View>
                                             
                                          
                                             </AnimatedModal>
            
          </View>
        );
      }
    }



//STyling the css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },

  navBar:{
      backgroundColor:'#999999',
     alignItems: 'center',
    justifyContent: 'center',
    height:80,

  },
  mainSection:{

    backgroundColor:'white',
     alignItems: 'center',
    justifyContent: 'center',
    flex:12
  },
  barItems:{
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
     justifyContent: 'space-between'

  },
  formView:{

        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#900C3F',
        height:500,
        width:"95%",
        padding:"5%",
        marginTop:"30%",
        marginBottom:'5%',
        display:'flex',
        flexDirection:'column',
        borderRadius:25
  },
  labels:{
    fontSize:22,
    paddingBottom:10,
    marginTop:"20%",
    marginBottom:30,
    borderBottomWidth:1
  },
  Inputs:{

    alignSelf:'stretch',
    height:40,
    marginBottom:0,
    marginTop:10,
    color:'#fff',
    borderBottomWidth:1,
    fontSize:18
  },

  btnlabel:{

    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#fff'
  },

  pic:{marginLeft:20,alignSelf:'center',backgroundColor:'#fff',borderRadius:300,padding:10},

  heading:{

    fontSize:40,
    color:'#900c3f'
  }
});
