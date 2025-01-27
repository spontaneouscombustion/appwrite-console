import { PAGE_LIMIT } from '$lib/constants';
import { getLimit, getPage, pageToOffset } from '$lib/helpers/load';
import { sdk } from '$lib/stores/sdk';
import { Query } from '@aw-labs/appwrite-console';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, params, route }) => {
    const page = getPage(url);
    const limit = getLimit(url, route, PAGE_LIMIT);
    const offset = pageToOffset(page, limit);

    return {
        offset,
        limit,
        organizationMembers: await sdk.forConsole.teams.listMemberships(params.organization, [
            Query.limit(limit),
            Query.offset(offset)
        ])
    };
};
