import React, { ReactElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../../redux/actions/DataActions';
import { RootState } from '../../redux';

const Users: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const dataList = useSelector((state: RootState) => state.data.filteredList);

  useEffect(() => {
    dispatch(getAllData);
  });
  // console.log(data.dataList);
  // const data = useContext(DataContext);

  const dataListCom = dataList.map((data, indx) => (
    <React.Fragment key={indx}>
      <div>{data.name}</div>
    </React.Fragment>
  ));

  return <React.Fragment> {dataListCom} </React.Fragment>;
};

export default Users;
