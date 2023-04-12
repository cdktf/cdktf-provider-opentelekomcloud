# `lbLoadbalancerV3` Submodule <a name="`lbLoadbalancerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbLoadbalancerV3 <a name="LbLoadbalancerV3" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbloadbalancerv3"

lbloadbalancerv3.NewLbLoadbalancerV3(scope Construct, id *string, config LbLoadbalancerV3Config) LbLoadbalancerV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config">LbLoadbalancerV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config">LbLoadbalancerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp">PutPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetIpTargetEnable">ResetIpTargetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL4Flavor">ResetL4Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL7Flavor">ResetL7Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetPublicIp">ResetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetRouterId">ResetRouterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetVipAddress">ResetVipAddress</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPublicIp` <a name="PutPublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp"></a>

```go
func PutPublicIp(value LbLoadbalancerV3PublicIp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetAdminStateUp"></a>

```go
func ResetAdminStateUp()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetId"></a>

```go
func ResetId()
```

##### `ResetIpTargetEnable` <a name="ResetIpTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetIpTargetEnable"></a>

```go
func ResetIpTargetEnable()
```

##### `ResetL4Flavor` <a name="ResetL4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL4Flavor"></a>

```go
func ResetL4Flavor()
```

##### `ResetL7Flavor` <a name="ResetL7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL7Flavor"></a>

```go
func ResetL7Flavor()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetName"></a>

```go
func ResetName()
```

##### `ResetPublicIp` <a name="ResetPublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetPublicIp"></a>

```go
func ResetPublicIp()
```

##### `ResetRouterId` <a name="ResetRouterId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetRouterId"></a>

```go
func ResetRouterId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVipAddress` <a name="ResetVipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetVipAddress"></a>

```go
func ResetVipAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbloadbalancerv3"

lbloadbalancerv3.LbLoadbalancerV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbloadbalancerv3"

lbloadbalancerv3.LbLoadbalancerV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbloadbalancerv3"

lbloadbalancerv3.LbLoadbalancerV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIp">PublicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference">LbLoadbalancerV3PublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipPortId">VipPortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnableInput">IpTargetEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4FlavorInput">L4FlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7FlavorInput">L7FlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIdsInput">NetworkIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIpInput">PublicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerIdInput">RouterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddressInput">VipAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnable">IpTargetEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4Flavor">L4Flavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7Flavor">L7Flavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIds">NetworkIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerId">RouterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddress">VipAddress</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIp"></a>

```go
func PublicIp() LbLoadbalancerV3PublicIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference">LbLoadbalancerV3PublicIpOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `VipPortId`<sup>Required</sup> <a name="VipPortId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipPortId"></a>

```go
func VipPortId() *string
```

- *Type:* *string

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUpInput"></a>

```go
func AdminStateUpInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpTargetEnableInput`<sup>Optional</sup> <a name="IpTargetEnableInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnableInput"></a>

```go
func IpTargetEnableInput() interface{}
```

- *Type:* interface{}

---

##### `L4FlavorInput`<sup>Optional</sup> <a name="L4FlavorInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4FlavorInput"></a>

```go
func L4FlavorInput() *string
```

- *Type:* *string

---

##### `L7FlavorInput`<sup>Optional</sup> <a name="L7FlavorInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7FlavorInput"></a>

```go
func L7FlavorInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkIdsInput`<sup>Optional</sup> <a name="NetworkIdsInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIdsInput"></a>

```go
func NetworkIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PublicIpInput`<sup>Optional</sup> <a name="PublicIpInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIpInput"></a>

```go
func PublicIpInput() LbLoadbalancerV3PublicIp
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---

##### `RouterIdInput`<sup>Optional</sup> <a name="RouterIdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerIdInput"></a>

```go
func RouterIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VipAddressInput`<sup>Optional</sup> <a name="VipAddressInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddressInput"></a>

```go
func VipAddressInput() *string
```

- *Type:* *string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUp"></a>

```go
func AdminStateUp() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpTargetEnable`<sup>Required</sup> <a name="IpTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnable"></a>

```go
func IpTargetEnable() interface{}
```

- *Type:* interface{}

---

##### `L4Flavor`<sup>Required</sup> <a name="L4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4Flavor"></a>

```go
func L4Flavor() *string
```

- *Type:* *string

---

##### `L7Flavor`<sup>Required</sup> <a name="L7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7Flavor"></a>

```go
func L7Flavor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkIds`<sup>Required</sup> <a name="NetworkIds" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIds"></a>

```go
func NetworkIds() *[]*string
```

- *Type:* *[]*string

---

##### `RouterId`<sup>Required</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerId"></a>

```go
func RouterId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VipAddress`<sup>Required</sup> <a name="VipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddress"></a>

```go
func VipAddress() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbLoadbalancerV3Config <a name="LbLoadbalancerV3Config" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbloadbalancerv3"

&lbloadbalancerv3.LbLoadbalancerV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZones: *[]*string,
	NetworkIds: *[]*string,
	AdminStateUp: interface{},
	DeletionProtection: interface{},
	Description: *string,
	Id: *string,
	IpTargetEnable: interface{},
	L4Flavor: *string,
	L7Flavor: *string,
	Name: *string,
	PublicIp: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp,
	RouterId: *string,
	SubnetId: *string,
	Tags: *map[string]*string,
	VipAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.networkIds">NetworkIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#description LbLoadbalancerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#id LbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.ipTargetEnable">IpTargetEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l4Flavor">L4Flavor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l7Flavor">L7Flavor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#name LbLoadbalancerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.publicIp">PublicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.routerId">RouterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.vipAddress">VipAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}.

---

##### `NetworkIds`<sup>Required</sup> <a name="NetworkIds" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.networkIds"></a>

```go
NetworkIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.adminStateUp"></a>

```go
AdminStateUp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#description LbLoadbalancerV3#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#id LbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpTargetEnable`<sup>Optional</sup> <a name="IpTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.ipTargetEnable"></a>

```go
IpTargetEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}.

---

##### `L4Flavor`<sup>Optional</sup> <a name="L4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l4Flavor"></a>

```go
L4Flavor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}.

---

##### `L7Flavor`<sup>Optional</sup> <a name="L7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l7Flavor"></a>

```go
L7Flavor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#name LbLoadbalancerV3#name}.

---

##### `PublicIp`<sup>Optional</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.publicIp"></a>

```go
PublicIp LbLoadbalancerV3PublicIp
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#public_ip LbLoadbalancerV3#public_ip}

---

##### `RouterId`<sup>Optional</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.routerId"></a>

```go
RouterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}.

---

##### `VipAddress`<sup>Optional</sup> <a name="VipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.vipAddress"></a>

```go
VipAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}.

---

### LbLoadbalancerV3PublicIp <a name="LbLoadbalancerV3PublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbloadbalancerv3"

&lbloadbalancerv3.LbLoadbalancerV3PublicIp {
	BandwidthChargeMode: *string,
	BandwidthName: *string,
	BandwidthShareType: *string,
	BandwidthSize: *f64,
	Id: *string,
	IpType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthChargeMode">BandwidthChargeMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthName">BandwidthName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_name LbLoadbalancerV3#bandwidth_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthShareType">BandwidthShareType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_share_type LbLoadbalancerV3#bandwidth_share_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#id LbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.ipType">IpType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#ip_type LbLoadbalancerV3#ip_type}. |

---

##### `BandwidthChargeMode`<sup>Optional</sup> <a name="BandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthChargeMode"></a>

```go
BandwidthChargeMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}.

---

##### `BandwidthName`<sup>Optional</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthName"></a>

```go
BandwidthName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_name LbLoadbalancerV3#bandwidth_name}.

---

##### `BandwidthShareType`<sup>Optional</sup> <a name="BandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthShareType"></a>

```go
BandwidthShareType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_share_type LbLoadbalancerV3#bandwidth_share_type}.

---

##### `BandwidthSize`<sup>Optional</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthSize"></a>

```go
BandwidthSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#id LbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpType`<sup>Optional</sup> <a name="IpType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.ipType"></a>

```go
IpType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_loadbalancer_v3#ip_type LbLoadbalancerV3#ip_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbLoadbalancerV3PublicIpOutputReference <a name="LbLoadbalancerV3PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbloadbalancerv3"

lbloadbalancerv3.NewLbLoadbalancerV3PublicIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbLoadbalancerV3PublicIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthChargeMode">ResetBandwidthChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthName">ResetBandwidthName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthShareType">ResetBandwidthShareType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthSize">ResetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetIpType">ResetIpType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBandwidthChargeMode` <a name="ResetBandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthChargeMode"></a>

```go
func ResetBandwidthChargeMode()
```

##### `ResetBandwidthName` <a name="ResetBandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthName"></a>

```go
func ResetBandwidthName()
```

##### `ResetBandwidthShareType` <a name="ResetBandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthShareType"></a>

```go
func ResetBandwidthShareType()
```

##### `ResetBandwidthSize` <a name="ResetBandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthSize"></a>

```go
func ResetBandwidthSize()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIpType` <a name="ResetIpType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetIpType"></a>

```go
func ResetIpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.managed">Managed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeModeInput">BandwidthChargeModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthNameInput">BandwidthNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareTypeInput">BandwidthShareTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSizeInput">BandwidthSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipTypeInput">IpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode">BandwidthChargeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthName">BandwidthName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType">BandwidthShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipType">IpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.managed"></a>

```go
func Managed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BandwidthChargeModeInput`<sup>Optional</sup> <a name="BandwidthChargeModeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeModeInput"></a>

```go
func BandwidthChargeModeInput() *string
```

- *Type:* *string

---

##### `BandwidthNameInput`<sup>Optional</sup> <a name="BandwidthNameInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthNameInput"></a>

```go
func BandwidthNameInput() *string
```

- *Type:* *string

---

##### `BandwidthShareTypeInput`<sup>Optional</sup> <a name="BandwidthShareTypeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareTypeInput"></a>

```go
func BandwidthShareTypeInput() *string
```

- *Type:* *string

---

##### `BandwidthSizeInput`<sup>Optional</sup> <a name="BandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSizeInput"></a>

```go
func BandwidthSizeInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpTypeInput`<sup>Optional</sup> <a name="IpTypeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipTypeInput"></a>

```go
func IpTypeInput() *string
```

- *Type:* *string

---

##### `BandwidthChargeMode`<sup>Required</sup> <a name="BandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode"></a>

```go
func BandwidthChargeMode() *string
```

- *Type:* *string

---

##### `BandwidthName`<sup>Required</sup> <a name="BandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthName"></a>

```go
func BandwidthName() *string
```

- *Type:* *string

---

##### `BandwidthShareType`<sup>Required</sup> <a name="BandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType"></a>

```go
func BandwidthShareType() *string
```

- *Type:* *string

---

##### `BandwidthSize`<sup>Required</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize"></a>

```go
func BandwidthSize() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpType`<sup>Required</sup> <a name="IpType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipType"></a>

```go
func IpType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.internalValue"></a>

```go
func InternalValue() LbLoadbalancerV3PublicIp
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---



