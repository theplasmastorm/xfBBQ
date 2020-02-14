import React, { useReducer, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import fetchQuery from "../../scripts/fetchQuery";
import PropTypes from "prop-types";
import Spinner from "../../Spinner";

export default function BBQCookingInformation({ ...props }) {
  const history = useHistory();

  // If coming to this page raw, return to BBQList
  if (!props.location.state) history.push("/BBQList");

  // Get users
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  // Set reducer state
  const [reducerState, setReducerState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      rareNormal: "?",
      rareCheesy: "?",
      rareSpicy: "?",
      rareCheesySpicy: "?",
      rareTotal: "?",

      medRareNormal: "?",
      medRareCheesy: "?",
      medRareSpicy: "?",
      medRareCheesySpicy: "?",
      medRareTotal: "?",

      medNormal: "?",
      medCheesy: "?",
      medSpicy: "?",
      medCheesySpicy: "?",
      medTotal: "?",

      medWellNormal: "?",
      medWellCheesy: "?",
      medWellSpicy: "?",
      medWellCheesySpicy: "?",
      medWellTotal: "?",

      wellNormal: "?",
      wellCheesy: "?",
      wellSpicy: "?",
      wellCheesySpicy: "?",
      wellTotal: "?",

      totalNormal: "?",
      totalCheesy: "?",
      totalSpicy: "?",
      totalCheesySpicy: "?",
      totalTotal: "?",

      turkeyNormal: "?",
      turkeyCheesy: "?",
      turkeySpicy: "?",
      turkeyCheesySpicy: "?",
      turkeyTotal: "?",

      vegetarianNormal: "?",
      vegetarianCheesy: "?",
      vegetarianSpicy: "?",
      vegetarianCheesySpicy: "?",
      vegetarianTotal: "?",

      hotdogNormal: "?",
      hotdogBurnt: "?",
      hotdogTotal: "?"
    }
  );

  // Query for everything
  const bbqID = props.location.state ? props.location.state.Id : 0;
  document.title = "BBQ Information for BBQ " + bbqID;
  const [queryResult, setQueryResult] = useState(undefined);
  useEffect(() => {
    fetchQuery(
      `Orders?$filter=Bbqid eq ${bbqID} &$orderby=Userid`
    ).then(value => setQueryResult(value));

    // Rare Beef
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 1 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ rareNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 1 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ rareCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 1 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ rareSpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 1 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ rareCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 1`
    ).then(value => setReducerState({ rareTotal: value }));

    // Med Rare Beef
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 2 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ medRareNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 2 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ medRareCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 2 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ medRareSpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 2 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ medRareCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 2`
    ).then(value => setReducerState({ medRareTotal: value }));

    // Med Beef
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 3 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ medNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 3 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ medCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 3 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ medSpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 3 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ medCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 3`
    ).then(value => setReducerState({ medTotal: value }));

    // Med Well Beef
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 4 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ medWellNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 4 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ medWellCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 4 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ medWellSpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 4 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ medWellCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 4`
    ).then(value => setReducerState({ medWellTotal: value }));

    // Well Beef
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 5 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ wellNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 5 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ wellCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 5 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ wellSpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 5 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ wellCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Doneness eq 5`
    ).then(value => setReducerState({ wellTotal: value }));

    // Totals
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ totalNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ totalCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ totalSpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ totalCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 1`
    ).then(value => setReducerState({ totalTotal: value }));

    // Turkey
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 2 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ turkeyNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 2 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ turkeyCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 2 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ turkeySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 2 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ turkeyCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 2`
    ).then(value => setReducerState({ turkeyTotal: value }));

    // Vegetarian
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 3 and Cheese eq 0 and Spicy eq 0`
    ).then(value => setReducerState({ vegetarianNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 3 and Cheese ge 1 and Spicy eq 0`
    ).then(value => setReducerState({ vegetarianCheesy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 3 and Cheese eq 0 and Spicy ge 1`
    ).then(value => setReducerState({ vegetarianSpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 3 and Cheese ge 1 and Spicy ge 1`
    ).then(value => setReducerState({ vegetarianCheesySpicy: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Meat eq 3`
    ).then(value => setReducerState({ vegetarianTotal: value }));

    // Hotdogs
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Type ge 1 and Burnt eq 0`
    ).then(value => setReducerState({ hotdogNormal: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Type ge 1 and Burnt ge 1`
    ).then(value => setReducerState({ hotdogBurnt: value }));
    fetchQuery(
      `Orders/$count?$filter=Bbqid eq ${bbqID} and Type ge 1`
    ).then(value => setReducerState({ hotdogTotal: value }));
  }, [bbqID]);

  // Display results
  return (
    <div className="jumbotron">
      {queryResult ? (
        <>
          <h2>BBQ Information for BBQ {bbqID}</h2>
          <table className="table">
            <thead>
              <tr className="table-primary">
                <th style={{ width: "10%" }}>Served</th>
                <th style={{ width: "40%" }}>Name</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {queryResult.value.map(result => {
                // Figure out what to print
                let order = "";
                if (result.Meat > 0) {
                  if (result.Spicy > 0) order += "Spicy ";
                  if (
                    result.Cheese > 0 &&
                    (result.Meat === 2 || result.Meat === 3)
                  )
                    order += "Cheese ";
                  switch (result.Meat) {
                    case 2:
                      order += "Turkey Burger";
                      break;
                    case 3:
                      order += "Veggie Burger";
                      break;
                    default:
                      switch (result.Doneness) {
                        case 1:
                          order += "Rare ";
                          break;
                        case 2:
                          order += "Medium Rare ";
                          break;
                        case 3:
                          order += "Medium ";
                          break;
                        case 4:
                          order += "Medium Well ";
                          break;
                        default:
                          order += "Well Done ";
                          break;
                      }
                      if (result.Cheese > 0) order += "Cheese ";
                      order += "Beef Burger";
                      break;
                  }
                } else {
                  order += result.Count + "x ";
                  if (result.Burnt > 0) order += "Burnt ";
                  order += "Hotdog" + (result.Count > 1 ? "s" : "");
                }

                // Return order row
                return (
                  <tr key={result.Id}>
                    <td>
                      <center>
                        <input type="checkbox" />
                      </center>
                    </td>
                    <td>
                      {
                        users.value.filter(user => result.Userid === user.Id)[0]
                          .Name
                      }
                    </td>
                    <td>{order}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h3>Beef Burger Orders</h3>
          <table className="table">
            <thead>
              <tr className="table-primary">
                <th style={{ width: "10%" }} />
                <th style={{ width: "10%" }}>Neither</th>
                <th style={{ width: "10%" }}>Cheesy</th>
                <th style={{ width: "10%" }}>Spicy</th>
                <th style={{ width: "10%" }}>Both</th>
                <th style={{ width: "10%" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Rare</th>
                <td>{reducerState.rareNormal}</td>
                <td>{reducerState.rareCheesy}</td>
                <td>{reducerState.rareSpicy}</td>
                <td>{reducerState.rareCheesySpicy}</td>
                <td>{reducerState.rareTotal}</td>
              </tr>
              <tr>
                <th scope="row">Medium Rare</th>
                <td>{reducerState.medRareNormal}</td>
                <td>{reducerState.medRareCheesy}</td>
                <td>{reducerState.medRareSpicy}</td>
                <td>{reducerState.medRareCheesySpicy}</td>
                <td>{reducerState.medRareTotal}</td>
              </tr>
              <tr>
                <th scope="row">Medium</th>
                <td>{reducerState.medNormal}</td>
                <td>{reducerState.medCheesy}</td>
                <td>{reducerState.medSpicy}</td>
                <td>{reducerState.medCheesySpicy}</td>
                <td>{reducerState.medTotal}</td>
              </tr>
              <tr>
                <th scope="row">Medium Well</th>
                <td>{reducerState.medWellNormal}</td>
                <td>{reducerState.medWellCheesy}</td>
                <td>{reducerState.medWellSpicy}</td>
                <td>{reducerState.medWellCheesySpicy}</td>
                <td>{reducerState.medWellTotal}</td>
              </tr>
              <tr>
                <th scope="row">Well Done</th>
                <td>{reducerState.wellNormal}</td>
                <td>{reducerState.wellCheesy}</td>
                <td>{reducerState.wellSpicy}</td>
                <td>{reducerState.wellCheesySpicy}</td>
                <td>{reducerState.wellTotal}</td>
              </tr>
              <tr>
                <th scope="row">Total</th>
                <td>{reducerState.totalNormal}</td>
                <td>{reducerState.totalCheesy}</td>
                <td>{reducerState.totalSpicy}</td>
                <td>{reducerState.totalCheesySpicy}</td>
                <td>{reducerState.totalTotal}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Turkey Burger Orders</h3>
          <table className="table">
            <thead>
              <tr className="table-primary">
                <th style={{ width: "10%" }} />
                <th style={{ width: "10%" }}>Neither</th>
                <th style={{ width: "10%" }}>Cheesy</th>
                <th style={{ width: "10%" }}>Spicy</th>
                <th style={{ width: "10%" }}>Both</th>
                <th style={{ width: "10%" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Total</th>
                <td>{reducerState.turkeyNormal}</td>
                <td>{reducerState.turkeyCheesy}</td>
                <td>{reducerState.turkeySpicy}</td>
                <td>{reducerState.turkeyCheesySpicy}</td>
                <td>{reducerState.turkeyTotal}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Vegetarian Burger Orders</h3>
          <table className="table">
            <thead>
              <tr className="table-primary">
                <th style={{ width: "10%" }} />
                <th style={{ width: "10%" }}>Neither</th>
                <th style={{ width: "10%" }}>Cheesy</th>
                <th style={{ width: "10%" }}>Spicy</th>
                <th style={{ width: "10%" }}>Both</th>
                <th style={{ width: "10%" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Total</th>
                <td>{reducerState.vegetarianNormal}</td>
                <td>{reducerState.vegetarianCheesy}</td>
                <td>{reducerState.vegetarianSpicy}</td>
                <td>{reducerState.vegetarianCheesySpicy}</td>
                <td>{reducerState.vegetarianTotal}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Hotdog Orders</h3>
          <table className="table">
            <thead>
              <tr className="table-primary">
                <th style={{ width: "10%" }} />
                <th style={{ width: "10%" }}>Normal</th>
                <th style={{ width: "10%" }}>Burnt</th>
                <th style={{ width: "10%" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Total</th>
                <td>{reducerState.hotdogNormal}</td>
                <td>{reducerState.hotdogBurnt}</td>
                <td>{reducerState.hotdogTotal}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

BBQCookingInformation.propTypes = {
  location: PropTypes.object.isRequired
};
