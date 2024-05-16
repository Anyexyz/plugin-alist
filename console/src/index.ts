import type { Attachment } from "@halo-dev/api-client";
import { definePlugin } from "@halo-dev/console-shared";
import AlistLink from "./views/AlistLink.vue";
import AlistUnlink from "./views/AlistUnlink.vue";
import type { Ref } from "vue";
import { markRaw } from "vue";
import CarbonFolderDetailsReference from "~icons/carbon/folder-details-reference";

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "ToolsRoot",
      route: {
        path: "alist-link",
        name: "AlistLink",
        component: AlistLink,
        meta: {
          title: "Alist关联",
          description: "提供将 S3 存储桶中的文件关联到 Halo 中的功能。",
          searchable: true,
          permissions: ["plugin:alist:link"],
          menu: {
            name: "Alist关联",
            icon: markRaw(CarbonFolderDetailsReference),
            priority: 0,
          },
        },
      },
    },
  ],
  extensionPoints: {
    "attachment:list-item:operation:create": (attachment: Ref<Attachment>) => {
      return [
        {
          priority: 21,
          component: markRaw(AlistUnlink),
          permissions: ["plugin:alist:unlink"],
          props: {
            attachment: attachment,
          },
          hidden: !(
            attachment.value.metadata.annotations &&
            attachment.value.metadata.annotations[
              "alist.plugin.halo.run/object-key"
            ]
          ),
        },
      ];
    },
  },
});
