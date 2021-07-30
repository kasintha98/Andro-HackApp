import React,{useState,useEffect,useParams} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Container } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import EditIcon from '@material-ui/icons/Edit';
import { shadows } from '@material-ui/system';




function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: '_id', numeric: true, disablePadding: true, label: 'ID' },
  { id: 'supplier_Name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'supplier_Description', numeric: false, disablePadding: false, label: 'Description' },
  { id: 'supplier_Contact', numeric: false, disablePadding: false, label: 'Contact Number' },
  { id: 'supplier_Email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'supplier_Address', numeric: false, disablePadding: false, label: 'Adderss' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected , onClickDelete , onClickUpdate } = props;


 
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Space List
        </Typography>
      )}

      {numSelected === 1 ? (

        <Tooltip title="Update" onClick={onClickUpdate}>
          <IconButton aria-label="update">
            <EditIcon/>
          </IconButton>
        </Tooltip>

      ) : (
        <Typography/>
      )}      

      {numSelected > 0 ? (
        <Tooltip title="Delete" onClick={onClickDelete}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
        <Link href='/add-space'>
        <Tooltip title="Add New Supplier">
          <IconButton aria-label="AddBoxRounded">
            <AddBoxRoundedIcon />
            </IconButton>
        </Tooltip>
        </Link>

        {/* <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip> */}
        </>
      )}

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onClickDelete:PropTypes.func.isRequired,
  onClickUpdate:PropTypes.func.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginTop:theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius:'10px',
    padding:'5px'
    // border:'2px solid #f95757',
    // boxShadow: '50px'

    
  },
  table: {
    minWidth: 750,
  },
  table_title : {

    textAlign:'center',
    marginBottom:'30px'

  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  supplier_breadcrumb:{

      marginTop:'5px',
      marginBottom:'0px',
      paddingLeft:'5px',
  },

  supplier_container:{

    marginTop:'50px',

  },
}));

export default function SpaceDetails() {

  const history = useHistory()
  const [suppliers, setSuppliers] = useState([]);
 // const [search, setSearch] = useState("");

  const getSupplierData = async () => {
    try {
      const data = await Axios.get(
        "http://localhost:5000/suppliers/"
      );
      console.log(data.data);
      setSuppliers(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSupplierData();
  }, []);
  

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('_id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = suppliers.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, _id) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //delete suppliers
  const handleDelete = (_id) => {

  
    //console.log(selected.toString(_id))
    Swal.fire({
      title: 'Are you sure ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        Axios.delete(
          `http://localhost:5000/suppliers/` + selected.toString(_id)
        )
        .then(res => {
    
          console.log(res.data)
                  
          if(res.data === "Supplier Deleted!"){
            Swal.fire({
              icon: 'success',
              title: 'Supplier Deleted!',
            })
            getSupplierData();
            setSelected([]);
    
    
          }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
        })
      }else{
        setSelected([]);
      }
    })

  
  }

const handleUpdate = (_id) => {

//   history.push(`/update-suppliers/` + selected.toString(_id));

}

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, suppliers.length - page * rowsPerPage);

  return (

    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb" className={classes.supplier_breadcrumb}>
        <Link color="inherit" href="/owner-main-page" >
          Home
        </Link>
      <Typography color="textPrimary">All Spaces</Typography>
      </Breadcrumbs>
      <Divider />

    <Container className={classes.supplier_container}>
    
    <h1 className={classes.table_title}>All Spaces</h1>
    <div className={classes.root}>
      <Paper className={classes.paper} elevation = {15}>
        <EnhancedTableToolbar numSelected={selected.length} onClickDelete={handleDelete} onClickUpdate={handleUpdate}/>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={suppliers.length}
            />
            <TableBody>
              {stableSort(suppliers, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row._id}
                      </TableCell>
                      <TableCell align="center">{row.supplier_Name}</TableCell>
                      <TableCell align="center">{row.supplier_Description}</TableCell>
                      <TableCell align="center">{row.supplier_Contact}</TableCell>
                      <TableCell align="center">{row.supplier_Email}</TableCell>
                      <TableCell align="center">{row.supplier_Address}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={suppliers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

    </div>
    </Container>
    </>
  );
}

