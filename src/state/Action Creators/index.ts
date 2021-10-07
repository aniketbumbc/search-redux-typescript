import axios from 'axios';
import { ActionType } from '../Action Types';
import { Action } from '../Actions';
import { Dispatch } from 'redux';

export const searchRepo = (term: string) => {
  return async (dipatch: Dispatch<Action>) => {
    dipatch({
      type: ActionType.SEARCH_REPO,
    });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dipatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dipatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: err.message,
      });
    }
  };
};
