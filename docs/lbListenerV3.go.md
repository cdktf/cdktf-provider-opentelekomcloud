# `lbListenerV3` Submodule <a name="`lbListenerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbListenerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV3 <a name="LbListenerV3" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3 opentelekomcloud_lb_listener_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

lblistenerv3.NewLbListenerV3(scope Construct, id *string, config LbListenerV3Config) LbListenerV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config">LbListenerV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config">LbListenerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders">PutInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup">PutIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding">ResetAdvancedForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef">ResetClientCaTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId">ResetDefaultPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef">ResetDefaultTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable">ResetHttp2Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders">ResetInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup">ResetIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout">ResetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable">ResetMemberRetryEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout">ResetMemberTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId">ResetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs">ResetSniContainerRefs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo">ResetSniMatchAlgo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy">ResetTlsCiphersPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInsertHeaders` <a name="PutInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders"></a>

```go
func PutInsertHeaders(value LbListenerV3InsertHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `PutIpGroup` <a name="PutIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup"></a>

```go
func PutIpGroup(value LbListenerV3IpGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp"></a>

```go
func ResetAdminStateUp()
```

##### `ResetAdvancedForwarding` <a name="ResetAdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding"></a>

```go
func ResetAdvancedForwarding()
```

##### `ResetClientCaTlsContainerRef` <a name="ResetClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef"></a>

```go
func ResetClientCaTlsContainerRef()
```

##### `ResetClientTimeout` <a name="ResetClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout"></a>

```go
func ResetClientTimeout()
```

##### `ResetDefaultPoolId` <a name="ResetDefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId"></a>

```go
func ResetDefaultPoolId()
```

##### `ResetDefaultTlsContainerRef` <a name="ResetDefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef"></a>

```go
func ResetDefaultTlsContainerRef()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttp2Enable` <a name="ResetHttp2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable"></a>

```go
func ResetHttp2Enable()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId"></a>

```go
func ResetId()
```

##### `ResetInsertHeaders` <a name="ResetInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders"></a>

```go
func ResetInsertHeaders()
```

##### `ResetIpGroup` <a name="ResetIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup"></a>

```go
func ResetIpGroup()
```

##### `ResetKeepAliveTimeout` <a name="ResetKeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout"></a>

```go
func ResetKeepAliveTimeout()
```

##### `ResetMemberRetryEnable` <a name="ResetMemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable"></a>

```go
func ResetMemberRetryEnable()
```

##### `ResetMemberTimeout` <a name="ResetMemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout"></a>

```go
func ResetMemberTimeout()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName"></a>

```go
func ResetName()
```

##### `ResetSecurityPolicyId` <a name="ResetSecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId"></a>

```go
func ResetSecurityPolicyId()
```

##### `ResetSniContainerRefs` <a name="ResetSniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs"></a>

```go
func ResetSniContainerRefs()
```

##### `ResetSniMatchAlgo` <a name="ResetSniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo"></a>

```go
func ResetSniMatchAlgo()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTlsCiphersPolicy` <a name="ResetTlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy"></a>

```go
func ResetTlsCiphersPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

lblistenerv3.LbListenerV3_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

lblistenerv3.LbListenerV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

lblistenerv3.LbListenerV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders">InsertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup">IpGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference">LbListenerV3IpGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput">AdvancedForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput">ClientCaTlsContainerRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput">DefaultPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput">DefaultTlsContainerRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput">Http2EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput">InsertHeadersInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput">IpGroupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput">KeepAliveTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput">LoadbalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput">MemberRetryEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput">MemberTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput">ProtocolPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput">SecurityPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput">SniContainerRefsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput">SniMatchAlgoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput">TlsCiphersPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding">AdvancedForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef">ClientCaTlsContainerRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId">DefaultPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef">DefaultTlsContainerRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable">Http2Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId">LoadbalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable">MemberRetryEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout">MemberTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort">ProtocolPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId">SecurityPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs">SniContainerRefs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo">SniMatchAlgo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy">TlsCiphersPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `InsertHeaders`<sup>Required</sup> <a name="InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders"></a>

```go
func InsertHeaders() LbListenerV3InsertHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a>

---

##### `IpGroup`<sup>Required</sup> <a name="IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup"></a>

```go
func IpGroup() LbListenerV3IpGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference">LbListenerV3IpGroupOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput"></a>

```go
func AdminStateUpInput() interface{}
```

- *Type:* interface{}

---

##### `AdvancedForwardingInput`<sup>Optional</sup> <a name="AdvancedForwardingInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput"></a>

```go
func AdvancedForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCaTlsContainerRefInput`<sup>Optional</sup> <a name="ClientCaTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput"></a>

```go
func ClientCaTlsContainerRefInput() *string
```

- *Type:* *string

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput"></a>

```go
func ClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DefaultPoolIdInput`<sup>Optional</sup> <a name="DefaultPoolIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput"></a>

```go
func DefaultPoolIdInput() *string
```

- *Type:* *string

---

##### `DefaultTlsContainerRefInput`<sup>Optional</sup> <a name="DefaultTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput"></a>

```go
func DefaultTlsContainerRefInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Http2EnableInput`<sup>Optional</sup> <a name="Http2EnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput"></a>

```go
func Http2EnableInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsertHeadersInput`<sup>Optional</sup> <a name="InsertHeadersInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput"></a>

```go
func InsertHeadersInput() LbListenerV3InsertHeaders
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `IpGroupInput`<sup>Optional</sup> <a name="IpGroupInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput"></a>

```go
func IpGroupInput() LbListenerV3IpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---

##### `KeepAliveTimeoutInput`<sup>Optional</sup> <a name="KeepAliveTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput"></a>

```go
func KeepAliveTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LoadbalancerIdInput`<sup>Optional</sup> <a name="LoadbalancerIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput"></a>

```go
func LoadbalancerIdInput() *string
```

- *Type:* *string

---

##### `MemberRetryEnableInput`<sup>Optional</sup> <a name="MemberRetryEnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput"></a>

```go
func MemberRetryEnableInput() interface{}
```

- *Type:* interface{}

---

##### `MemberTimeoutInput`<sup>Optional</sup> <a name="MemberTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput"></a>

```go
func MemberTimeoutInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ProtocolPortInput`<sup>Optional</sup> <a name="ProtocolPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput"></a>

```go
func ProtocolPortInput() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyIdInput`<sup>Optional</sup> <a name="SecurityPolicyIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput"></a>

```go
func SecurityPolicyIdInput() *string
```

- *Type:* *string

---

##### `SniContainerRefsInput`<sup>Optional</sup> <a name="SniContainerRefsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput"></a>

```go
func SniContainerRefsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SniMatchAlgoInput`<sup>Optional</sup> <a name="SniMatchAlgoInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput"></a>

```go
func SniMatchAlgoInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TlsCiphersPolicyInput`<sup>Optional</sup> <a name="TlsCiphersPolicyInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput"></a>

```go
func TlsCiphersPolicyInput() *string
```

- *Type:* *string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp"></a>

```go
func AdminStateUp() interface{}
```

- *Type:* interface{}

---

##### `AdvancedForwarding`<sup>Required</sup> <a name="AdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding"></a>

```go
func AdvancedForwarding() interface{}
```

- *Type:* interface{}

---

##### `ClientCaTlsContainerRef`<sup>Required</sup> <a name="ClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef"></a>

```go
func ClientCaTlsContainerRef() *string
```

- *Type:* *string

---

##### `ClientTimeout`<sup>Required</sup> <a name="ClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout"></a>

```go
func ClientTimeout() *f64
```

- *Type:* *f64

---

##### `DefaultPoolId`<sup>Required</sup> <a name="DefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId"></a>

```go
func DefaultPoolId() *string
```

- *Type:* *string

---

##### `DefaultTlsContainerRef`<sup>Required</sup> <a name="DefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef"></a>

```go
func DefaultTlsContainerRef() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Http2Enable`<sup>Required</sup> <a name="Http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable"></a>

```go
func Http2Enable() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeepAliveTimeout`<sup>Required</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout"></a>

```go
func KeepAliveTimeout() *f64
```

- *Type:* *f64

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId"></a>

```go
func LoadbalancerId() *string
```

- *Type:* *string

---

##### `MemberRetryEnable`<sup>Required</sup> <a name="MemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable"></a>

```go
func MemberRetryEnable() interface{}
```

- *Type:* interface{}

---

##### `MemberTimeout`<sup>Required</sup> <a name="MemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout"></a>

```go
func MemberTimeout() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort"></a>

```go
func ProtocolPort() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId"></a>

```go
func SecurityPolicyId() *string
```

- *Type:* *string

---

##### `SniContainerRefs`<sup>Required</sup> <a name="SniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs"></a>

```go
func SniContainerRefs() *[]*string
```

- *Type:* *[]*string

---

##### `SniMatchAlgo`<sup>Required</sup> <a name="SniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo"></a>

```go
func SniMatchAlgo() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TlsCiphersPolicy`<sup>Required</sup> <a name="TlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy"></a>

```go
func TlsCiphersPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV3Config <a name="LbListenerV3Config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

&lblistenerv3.LbListenerV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LoadbalancerId: *string,
	Protocol: *string,
	ProtocolPort: *f64,
	AdminStateUp: interface{},
	AdvancedForwarding: interface{},
	ClientCaTlsContainerRef: *string,
	ClientTimeout: *f64,
	DefaultPoolId: *string,
	DefaultTlsContainerRef: *string,
	Description: *string,
	Http2Enable: interface{},
	Id: *string,
	InsertHeaders: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders,
	IpGroup: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.lbListenerV3.LbListenerV3IpGroup,
	KeepAliveTimeout: *f64,
	MemberRetryEnable: interface{},
	MemberTimeout: *f64,
	Name: *string,
	SecurityPolicyId: *string,
	SniContainerRefs: *[]*string,
	SniMatchAlgo: *string,
	Tags: *map[string]*string,
	TlsCiphersPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId">LoadbalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#protocol LbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort">ProtocolPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#protocol_port LbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding">AdvancedForwarding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef">ClientCaTlsContainerRef</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#client_timeout LbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId">DefaultPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef">DefaultTlsContainerRef</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#description LbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable">Http2Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#http2_enable LbListenerV3#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders">InsertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | insert_headers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup">IpGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout">KeepAliveTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable">MemberRetryEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout">MemberTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#member_timeout LbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#name LbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId">SecurityPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs">SniContainerRefs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo">SniMatchAlgo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#tags LbListenerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy">TlsCiphersPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoadbalancerId`<sup>Required</sup> <a name="LoadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId"></a>

```go
LoadbalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#protocol LbListenerV3#protocol}.

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort"></a>

```go
ProtocolPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#protocol_port LbListenerV3#protocol_port}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp"></a>

```go
AdminStateUp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}.

---

##### `AdvancedForwarding`<sup>Optional</sup> <a name="AdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding"></a>

```go
AdvancedForwarding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}.

---

##### `ClientCaTlsContainerRef`<sup>Optional</sup> <a name="ClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef"></a>

```go
ClientCaTlsContainerRef *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}.

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout"></a>

```go
ClientTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#client_timeout LbListenerV3#client_timeout}.

---

##### `DefaultPoolId`<sup>Optional</sup> <a name="DefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId"></a>

```go
DefaultPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}.

---

##### `DefaultTlsContainerRef`<sup>Optional</sup> <a name="DefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef"></a>

```go
DefaultTlsContainerRef *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#description LbListenerV3#description}.

---

##### `Http2Enable`<sup>Optional</sup> <a name="Http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable"></a>

```go
Http2Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#http2_enable LbListenerV3#http2_enable}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsertHeaders`<sup>Optional</sup> <a name="InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders"></a>

```go
InsertHeaders LbListenerV3InsertHeaders
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

insert_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#insert_headers LbListenerV3#insert_headers}

---

##### `IpGroup`<sup>Optional</sup> <a name="IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup"></a>

```go
IpGroup LbListenerV3IpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

ip_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#ip_group LbListenerV3#ip_group}

---

##### `KeepAliveTimeout`<sup>Optional</sup> <a name="KeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout"></a>

```go
KeepAliveTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}.

---

##### `MemberRetryEnable`<sup>Optional</sup> <a name="MemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable"></a>

```go
MemberRetryEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}.

---

##### `MemberTimeout`<sup>Optional</sup> <a name="MemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout"></a>

```go
MemberTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#member_timeout LbListenerV3#member_timeout}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#name LbListenerV3#name}.

---

##### `SecurityPolicyId`<sup>Optional</sup> <a name="SecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId"></a>

```go
SecurityPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}.

---

##### `SniContainerRefs`<sup>Optional</sup> <a name="SniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs"></a>

```go
SniContainerRefs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}.

---

##### `SniMatchAlgo`<sup>Optional</sup> <a name="SniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo"></a>

```go
SniMatchAlgo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#tags LbListenerV3#tags}.

---

##### `TlsCiphersPolicy`<sup>Optional</sup> <a name="TlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy"></a>

```go
TlsCiphersPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}.

---

### LbListenerV3InsertHeaders <a name="LbListenerV3InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

&lblistenerv3.LbListenerV3InsertHeaders {
	ForwardedForPort: interface{},
	ForwardedHost: interface{},
	ForwardedPort: interface{},
	ForwardElbIp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort">ForwardedForPort</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost">ForwardedHost</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort">ForwardedPort</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp">ForwardElbIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}. |

---

##### `ForwardedForPort`<sup>Optional</sup> <a name="ForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort"></a>

```go
ForwardedForPort interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}.

---

##### `ForwardedHost`<sup>Optional</sup> <a name="ForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost"></a>

```go
ForwardedHost interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}.

---

##### `ForwardedPort`<sup>Optional</sup> <a name="ForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort"></a>

```go
ForwardedPort interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}.

---

##### `ForwardElbIp`<sup>Optional</sup> <a name="ForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp"></a>

```go
ForwardElbIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}.

---

### LbListenerV3IpGroup <a name="LbListenerV3IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

&lblistenerv3.LbListenerV3IpGroup {
	Id: *string,
	Enable: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#enable LbListenerV3#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#type LbListenerV3#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#enable LbListenerV3#enable}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_listener_v3#type LbListenerV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV3InsertHeadersOutputReference <a name="LbListenerV3InsertHeadersOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

lblistenerv3.NewLbListenerV3InsertHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerV3InsertHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort">ResetForwardedForPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost">ResetForwardedHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort">ResetForwardedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp">ResetForwardElbIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardedForPort` <a name="ResetForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort"></a>

```go
func ResetForwardedForPort()
```

##### `ResetForwardedHost` <a name="ResetForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost"></a>

```go
func ResetForwardedHost()
```

##### `ResetForwardedPort` <a name="ResetForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort"></a>

```go
func ResetForwardedPort()
```

##### `ResetForwardElbIp` <a name="ResetForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp"></a>

```go
func ResetForwardElbIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput">ForwardedForPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput">ForwardedHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput">ForwardedPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput">ForwardElbIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort">ForwardedForPort</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost">ForwardedHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort">ForwardedPort</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp">ForwardElbIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardedForPortInput`<sup>Optional</sup> <a name="ForwardedForPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput"></a>

```go
func ForwardedForPortInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardedHostInput`<sup>Optional</sup> <a name="ForwardedHostInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput"></a>

```go
func ForwardedHostInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardedPortInput`<sup>Optional</sup> <a name="ForwardedPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput"></a>

```go
func ForwardedPortInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardElbIpInput`<sup>Optional</sup> <a name="ForwardElbIpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput"></a>

```go
func ForwardElbIpInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardedForPort`<sup>Required</sup> <a name="ForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort"></a>

```go
func ForwardedForPort() interface{}
```

- *Type:* interface{}

---

##### `ForwardedHost`<sup>Required</sup> <a name="ForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost"></a>

```go
func ForwardedHost() interface{}
```

- *Type:* interface{}

---

##### `ForwardedPort`<sup>Required</sup> <a name="ForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort"></a>

```go
func ForwardedPort() interface{}
```

- *Type:* interface{}

---

##### `ForwardElbIp`<sup>Required</sup> <a name="ForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp"></a>

```go
func ForwardElbIp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerV3InsertHeaders
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---


### LbListenerV3IpGroupOutputReference <a name="LbListenerV3IpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lblistenerv3"

lblistenerv3.NewLbListenerV3IpGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbListenerV3IpGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() LbListenerV3IpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---



