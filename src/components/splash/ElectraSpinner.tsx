// tslint:disable

import * as React from 'react'
import {Animated, Easing } from 'react-native'
import {Svg,G, LinearGradient, Path, Circle, Ellipse, Stop} from 'react-native-svg'

interface ElectraSpinnerProps {
   animate: boolean
}
interface ElectraSpinnerState {
   rotate: Animated.Value,
   incrementor: any,
   rotationFunction: string,
   MainComp:Animated.Value,
   springValue: Animated.Value,
   springNumber: any
}



const A = {
  Svg: Animated.createAnimatedComponent(Svg),
  G: Animated.createAnimatedComponent(G),
  Path: Animated.createAnimatedComponent(Path),
}

class ElectraSpinner extends React.Component<ElectraSpinnerProps, ElectraSpinnerState> {

  constructor(props: any){
    super(props);
    this.state = {
      rotate: new Animated.Value(0),
      incrementor: 0,
      rotationFunction: 'rotate(360, 40, 40)',
      MainComp: new Animated.Value(0),
      springValue: new Animated.Value(0.8),
      springNumber: 1
    };
  }

  componentDidMount(){
    if(this.props.animate){
      this.spin();
      this.scaleMainAnimation();
      this.spring(0.5);
      this.runSpringAnimate();
    }
  }

  scaleMainAnimation() {
    Animated.stagger(50, [

      this.timing(this.state.MainComp),

    ]).start()
  }

  timing(id: any) {
    return Animated.sequence([
      Animated.timing(
        id,
        { toValue: 1, duration: 150 }
      ),
      Animated.timing(
        id,
        { toValue: 0, duration: 150 }
      )
    ])
  }

  interp(id:any, value:any) {
    return id.interpolate({
      inputRange: [0, 1],
      outputRange: value,
    })
  }


  spin() {
    this.state.rotate.setValue(0);
    Animated.timing(
      this.state.rotate,
      {
      toValue: this.increaseNumber(),
      duration: 5,
      easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  runSpringAnimate(){
    Animated.timing(
      this.state.rotate,
      {
      toValue: this.springNumber(),
      duration: 500,
      easing: Easing.linear
      }
    ).start(() => this.runSpringAnimate());
  }
  springNumber(){
    if(this.state.springNumber === 1){
      this.setState({springNumber: 1.2});
      this.spring(this.state.springNumber);
    }else{
      this.setState({springNumber: 1});
      this.spring(this.state.springNumber);
    }
    return 0;
  }
  increaseNumber(){
    if(this.state.incrementor === 360){
      this.setState({incrementor: 0});
      return 360;
    }
    else{
      let rotation360Function = 'rotate('+(this.state.incrementor+30)+',40,40)';
      this.setState({rotationFunction: rotation360Function});
      this.setState({incrementor: this.state.incrementor+1});
      return this.state.incrementor;
    }
  }

  spring (value: any) {
  this.state.springValue.setValue(value)
  Animated.spring(
    this.state.springValue,
    {
      toValue: 1,
      friction: 0.7
    }
  ).start()
}

render() {
  return (
    <A.Svg height="100" width="100" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: [{scale: this.state.springValue}]
    }}>
      <A.G id="Spin" transform={this.state.rotationFunction} >

        <LinearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="40" y2="80">
          <Stop offset="0" stopColor='#BE00FF'/>
          <Stop offset="1" stopColor='#A618D7'/>
        </LinearGradient>
        <Circle cx="40" cy="40" r="40" fill="url(#SVGID_1_)"  />
        <G>
          <Circle cx="40.2" cy="72.9" r="1.5" fill='#FFFFFF' />
          <Ellipse transform="matrix(0.5 -0.866 0.866 0.5 -14.5623 21.8392)" cx="11.6" cy="23.5" rx="1.5" ry="1.5" fill='#FFFFFF' />
          <Ellipse transform="matrix(0.8661 -0.4999 0.4999 0.8661 -26.6736 13.3775)" cx="11.6" cy="56.5" rx="1.5" ry="1.5" fill='#FFFFFF' />
          <Ellipse transform="matrix(0.866 -0.5001 0.5001 0.866 -2.5613 37.5035)" cx="68.7" cy="23.5" rx="1.5" ry="1.5" fill='#FFFFFF' />
          <Circle cx="40.2" cy="7.1" r="1.5" fill='#FFFFFF' />
          <Path d="M66.2,55c0.7-1.3,2.3-1.8,3.6-1.2l0-27.5c-1.3,0.5-2.9,0-3.6-1.2c-0.7-1.3-0.4-2.9,0.7-3.8L43.1,7.5
            c-0.2,1.4-1.4,2.5-2.9,2.5c-1.5,0-2.7-1.1-2.9-2.5L13.4,21.2c1.1,0.9,1.5,2.5,0.7,3.8c-0.7,1.3-2.3,1.8-3.6,1.2l0,27.5
            c1.3-0.5,2.9,0,3.6,1.2c0.7,1.3,0.4,2.9-0.7,3.8l23.8,13.8c0.2-1.4,1.4-2.5,2.9-2.5c1.5,0,2.7,1.1,2.9,2.5l23.8-13.8
            C65.8,57.9,65.4,56.3,66.2,55z" fill='#FFFFFF' />
          <Ellipse transform="matrix(0.5 -0.866 0.866 0.5 -14.5635 87.7191)" cx="68.7" cy="56.5" rx="1.5" ry="1.5" fill='#FFFFFF' />
        </G>
      </A.G>
      <G id="Static">
        <G>
          <LinearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="15.2075" y1="39.9998" x2="65.1282" y2="39.9998">
            <Stop offset="0" stopColor='#BE00FF'/>
            <Stop offset="1" stopColor='#A618D7'/>
          </LinearGradient>
          <Path d="M45.8,50.8c2.7-1.5,4.5-3.9,5.5-6.6c1.4-4.1,7.8-1.8,5.4,3.6c0,0,0,0.1-0.1,0.1l7.8,4.5
            c0.7,0.4,0.9,1.2,0.5,1.9c-0.4,0.7-1.2,0.9-1.9,0.5l-7.8-4.5c-1.5,2.4-3.6,4.4-6.2,6c-2.3,1.4-4.8,2.1-7.3,2.4v8.5
            c0,0.8-0.7,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4v-8.4c-5.4-0.3-11.1-3.1-14.4-8l-7.1,4.1c-0.7,0.4-1.5,0.2-1.9-0.5
            c-0.4-0.7-0.2-1.5,0.5-1.9l7.1-4.1c-0.5-1-0.8-2-1.1-3l-0.7-3.7c-0.3-3.4,0.4-6.8,2-9.8l-7.2-4.2c-0.7-0.4-0.9-1.2-0.5-1.9
            c0.4-0.7,1.2-0.9,1.9-0.5l7.3,4.2c1.5-2.1,3.5-3.9,5.8-5.3c2.6-1.5,5.5-2.3,8.4-2.5v-8.9c0-0.8,0.7-1.4,1.4-1.4
            c0.8,0,1.4,0.6,1.4,1.4v8.9c5.1,0.5,10.3,3.4,13.4,8.1l7.9-4.6c0.7-0.4,1.5-0.2,1.9,0.5c0.4,0.7,0.1,1.5-0.5,1.9l-10.8,6.2
            c0,0-0.1,0-0.1,0.1l-2.6,1.5l-5.4,3.1l-15.7,9.1C33.5,52.4,40.4,53.9,45.8,50.8z" fill='url(#SVGID_2_)' />
          <Path d="M33.6,29.6c-5.3,3-5.9,6.8-5.8,12.3l19.5-11.3C43.5,27.6,38,27,33.6,29.6z" fill='#FFFFFF' />
        </G>
      </G>
    </A.Svg>
  );
}

}

export default ElectraSpinner;
