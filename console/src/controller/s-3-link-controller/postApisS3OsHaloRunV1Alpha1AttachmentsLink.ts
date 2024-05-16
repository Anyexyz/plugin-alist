import request from "@/utils/request";
import { LinkResult, DeepRequired, LinkRequest } from "../../interface";

/**
 * /apis/alist.halo.run/v1alpha1/attachments/link
 */
export function postApisS3OsHaloRunV1Alpha1AttachmentsLink(input: LinkRequest) {
    return request.post<DeepRequired<LinkResult>>(`/apis/alist.halo.run/v1alpha1/attachments/link`, input);
}
