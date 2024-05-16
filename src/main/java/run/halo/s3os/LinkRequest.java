package run.halo.alist;

import java.util.Set;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class LinkRequest {
    private String policyName;
    private Set<String> objectKeys;
}