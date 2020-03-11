import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

const customers = [
{
  'idx': 1,
  'id':'hong',
  'img':'https://placeimg.com/80/80/human1',
  'name':'홍길동',
  'birth':'961222',
  'gender':'남자',
  'job':'대학생',
},
{
  'idx': 2,
  'id':'big',
  'img':'https://placeimg.com/80/80/human2',
  'name':'배민지',
  'birth':'981222',
  'gender':'여자',
  'job':'학생',
},
{
  'idx': 3,
  'id':'big',
  'img':'https://placeimg.com/80/80/human3',
  'name':'이지수',
  'birth':'971222',
  'gender':'남자',
  'job':'직장인',
}
]

class App extends Component {
    render() {
      const { classes } = this.props;
      return(
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>아이디</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
           <TableBody>
            { customers.map(c => { //map은 key를 꼭 지정
                return(<Customer key={c.idx} id={c.id} img={c.img} name={c.name} birth={c.birth} gender={c.gender} job={c.job}/>);
              })}
           </TableBody>
          </Table>
        </Paper>
      );
    }
}

export default withStyles(styles)(App);