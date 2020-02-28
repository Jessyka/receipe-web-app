import {useRecipes} from "../useRecipes";
import { renderHook } from '@testing-library/react-hooks'

test('should return empty recipes when empty search term', async () => {
    const { result } = renderHook(() => useRecipes(''));
    expect(result.current.recipes).toStrictEqual([]);
});
