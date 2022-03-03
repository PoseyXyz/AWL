import React, {Component} from 'react';

const DUMMY_DATA=[
  {
    senderId: 'perborgen',
    text: 'Hey, how is it going'
  },
  {
    senderId: 'perborgen',
    text: 'Hey, how is it going'
  },
  {
    senderId: 'perborgen',
    text: 'Hey, how is it going'
  }

]




class MessageList extends Component{
  state={
    counters:[
      {
        senderId: 'perborgen',
        text: 'Hey, how is it going'
      },
      {
        senderId: 'perborgen',
        text: 'Hey, how is it going'
      },
      {
        senderId: 'perborgen',
        text: 'Hey, how is it going'
      }

    ]

  }
  render(){
    return(
      <div className="message-list">
        {DUMMY_DATA.map((dummy)=>{
          return(<p>{dummy.text}</p>)
        })}
        {this.state.counters.map(counter=>(
          <p>{counter.text}</p>
        ))}
        {DUMMY_DATA.map((dummy)=>{
          return (<h1>{dummy.senderId}</h1>)
        }

        )}
      </div>
    )
  }
}

export default MessageList;
