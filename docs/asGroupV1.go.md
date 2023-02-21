# `asGroupV1` Submodule <a name="`asGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.asGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsGroupV1 <a name="AsGroupV1" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1 opentelekomcloud_as_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.NewAsGroupV1(scope Construct, id *string, config AsGroupV1Config) AsGroupV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config">AsGroupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config">AsGroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners">PutLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups">PutSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones">ResetAvailableZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime">ResetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber">ResetDesireInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod">ResetHealthPeriodicAuditGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod">ResetHealthPeriodicAuditMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime">ResetHealthPeriodicAuditTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy">ResetInstanceTerminatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners">ResetLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId">ResetLbListenerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber">ResetMaxInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber">ResetMinInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId">ResetScalingConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLbaasListeners` <a name="PutLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners"></a>

```go
func PutLbaasListeners(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecurityGroups` <a name="PutSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups"></a>

```go
func PutSecurityGroups(value AsGroupV1SecurityGroups)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts"></a>

```go
func PutTimeouts(value AsGroupV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---

##### `ResetAvailableZones` <a name="ResetAvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones"></a>

```go
func ResetAvailableZones()
```

##### `ResetCoolDownTime` <a name="ResetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime"></a>

```go
func ResetCoolDownTime()
```

##### `ResetDesireInstanceNumber` <a name="ResetDesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber"></a>

```go
func ResetDesireInstanceNumber()
```

##### `ResetHealthPeriodicAuditGracePeriod` <a name="ResetHealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod"></a>

```go
func ResetHealthPeriodicAuditGracePeriod()
```

##### `ResetHealthPeriodicAuditMethod` <a name="ResetHealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod"></a>

```go
func ResetHealthPeriodicAuditMethod()
```

##### `ResetHealthPeriodicAuditTime` <a name="ResetHealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime"></a>

```go
func ResetHealthPeriodicAuditTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceTerminatePolicy` <a name="ResetInstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy"></a>

```go
func ResetInstanceTerminatePolicy()
```

##### `ResetLbaasListeners` <a name="ResetLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners"></a>

```go
func ResetLbaasListeners()
```

##### `ResetLbListenerId` <a name="ResetLbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId"></a>

```go
func ResetLbListenerId()
```

##### `ResetMaxInstanceNumber` <a name="ResetMaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber"></a>

```go
func ResetMaxInstanceNumber()
```

##### `ResetMinInstanceNumber` <a name="ResetMinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber"></a>

```go
func ResetMinInstanceNumber()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications"></a>

```go
func ResetNotifications()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScalingConfigurationId` <a name="ResetScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId"></a>

```go
func ResetScalingConfigurationId()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.AsGroupV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.AsGroupV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.AsGroupV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber">CurrentInstanceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners">LbaasListeners</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups">SecurityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput">AvailableZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput">CoolDownTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput">DeleteInstancesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput">DeletePublicipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput">DesireInstanceNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput">HealthPeriodicAuditGracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput">HealthPeriodicAuditMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput">HealthPeriodicAuditTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput">InstanceTerminatePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput">LbaasListenersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput">LbListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput">MaxInstanceNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput">MinInstanceNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput">NotificationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput">ScalingConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput">ScalingGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime">CoolDownTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances">DeleteInstances</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip">DeletePublicip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber">DesireInstanceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod">HealthPeriodicAuditGracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod">HealthPeriodicAuditMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime">HealthPeriodicAuditTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy">InstanceTerminatePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId">LbListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber">MaxInstanceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber">MinInstanceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications">Notifications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId">ScalingConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName">ScalingGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentInstanceNumber`<sup>Required</sup> <a name="CurrentInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber"></a>

```go
func CurrentInstanceNumber() *f64
```

- *Type:* *f64

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `LbaasListeners`<sup>Required</sup> <a name="LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners"></a>

```go
func LbaasListeners() AsGroupV1LbaasListenersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks"></a>

```go
func Networks() AsGroupV1NetworksList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a>

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups"></a>

```go
func SecurityGroups() AsGroupV1SecurityGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts"></a>

```go
func Timeouts() AsGroupV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a>

---

##### `AvailableZonesInput`<sup>Optional</sup> <a name="AvailableZonesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput"></a>

```go
func AvailableZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CoolDownTimeInput`<sup>Optional</sup> <a name="CoolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput"></a>

```go
func CoolDownTimeInput() *f64
```

- *Type:* *f64

---

##### `DeleteInstancesInput`<sup>Optional</sup> <a name="DeleteInstancesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput"></a>

```go
func DeleteInstancesInput() *string
```

- *Type:* *string

---

##### `DeletePublicipInput`<sup>Optional</sup> <a name="DeletePublicipInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput"></a>

```go
func DeletePublicipInput() interface{}
```

- *Type:* interface{}

---

##### `DesireInstanceNumberInput`<sup>Optional</sup> <a name="DesireInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput"></a>

```go
func DesireInstanceNumberInput() *f64
```

- *Type:* *f64

---

##### `HealthPeriodicAuditGracePeriodInput`<sup>Optional</sup> <a name="HealthPeriodicAuditGracePeriodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput"></a>

```go
func HealthPeriodicAuditGracePeriodInput() *f64
```

- *Type:* *f64

---

##### `HealthPeriodicAuditMethodInput`<sup>Optional</sup> <a name="HealthPeriodicAuditMethodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput"></a>

```go
func HealthPeriodicAuditMethodInput() *string
```

- *Type:* *string

---

##### `HealthPeriodicAuditTimeInput`<sup>Optional</sup> <a name="HealthPeriodicAuditTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput"></a>

```go
func HealthPeriodicAuditTimeInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTerminatePolicyInput`<sup>Optional</sup> <a name="InstanceTerminatePolicyInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput"></a>

```go
func InstanceTerminatePolicyInput() *string
```

- *Type:* *string

---

##### `LbaasListenersInput`<sup>Optional</sup> <a name="LbaasListenersInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput"></a>

```go
func LbaasListenersInput() interface{}
```

- *Type:* interface{}

---

##### `LbListenerIdInput`<sup>Optional</sup> <a name="LbListenerIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput"></a>

```go
func LbListenerIdInput() *string
```

- *Type:* *string

---

##### `MaxInstanceNumberInput`<sup>Optional</sup> <a name="MaxInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput"></a>

```go
func MaxInstanceNumberInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceNumberInput`<sup>Optional</sup> <a name="MinInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput"></a>

```go
func MinInstanceNumberInput() *f64
```

- *Type:* *f64

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput"></a>

```go
func NotificationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScalingConfigurationIdInput`<sup>Optional</sup> <a name="ScalingConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput"></a>

```go
func ScalingConfigurationIdInput() *string
```

- *Type:* *string

---

##### `ScalingGroupNameInput`<sup>Optional</sup> <a name="ScalingGroupNameInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput"></a>

```go
func ScalingGroupNameInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() AsGroupV1SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones"></a>

```go
func AvailableZones() *[]*string
```

- *Type:* *[]*string

---

##### `CoolDownTime`<sup>Required</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime"></a>

```go
func CoolDownTime() *f64
```

- *Type:* *f64

---

##### `DeleteInstances`<sup>Required</sup> <a name="DeleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances"></a>

```go
func DeleteInstances() *string
```

- *Type:* *string

---

##### `DeletePublicip`<sup>Required</sup> <a name="DeletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip"></a>

```go
func DeletePublicip() interface{}
```

- *Type:* interface{}

---

##### `DesireInstanceNumber`<sup>Required</sup> <a name="DesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber"></a>

```go
func DesireInstanceNumber() *f64
```

- *Type:* *f64

---

##### `HealthPeriodicAuditGracePeriod`<sup>Required</sup> <a name="HealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod"></a>

```go
func HealthPeriodicAuditGracePeriod() *f64
```

- *Type:* *f64

---

##### `HealthPeriodicAuditMethod`<sup>Required</sup> <a name="HealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod"></a>

```go
func HealthPeriodicAuditMethod() *string
```

- *Type:* *string

---

##### `HealthPeriodicAuditTime`<sup>Required</sup> <a name="HealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime"></a>

```go
func HealthPeriodicAuditTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceTerminatePolicy`<sup>Required</sup> <a name="InstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy"></a>

```go
func InstanceTerminatePolicy() *string
```

- *Type:* *string

---

##### `LbListenerId`<sup>Required</sup> <a name="LbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId"></a>

```go
func LbListenerId() *string
```

- *Type:* *string

---

##### `MaxInstanceNumber`<sup>Required</sup> <a name="MaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber"></a>

```go
func MaxInstanceNumber() *f64
```

- *Type:* *f64

---

##### `MinInstanceNumber`<sup>Required</sup> <a name="MinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber"></a>

```go
func MinInstanceNumber() *f64
```

- *Type:* *f64

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications"></a>

```go
func Notifications() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ScalingConfigurationId`<sup>Required</sup> <a name="ScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId"></a>

```go
func ScalingConfigurationId() *string
```

- *Type:* *string

---

##### `ScalingGroupName`<sup>Required</sup> <a name="ScalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName"></a>

```go
func ScalingGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AsGroupV1Config <a name="AsGroupV1Config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

&asgroupv1.AsGroupV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeleteInstances: *string,
	DeletePublicip: interface{},
	Networks: interface{},
	ScalingGroupName: *string,
	VpcId: *string,
	AvailableZones: *[]*string,
	CoolDownTime: *f64,
	DesireInstanceNumber: *f64,
	HealthPeriodicAuditGracePeriod: *f64,
	HealthPeriodicAuditMethod: *string,
	HealthPeriodicAuditTime: *f64,
	Id: *string,
	InstanceTerminatePolicy: *string,
	LbaasListeners: interface{},
	LbListenerId: *string,
	MaxInstanceNumber: *f64,
	MinInstanceNumber: *f64,
	Notifications: *[]*string,
	Region: *string,
	ScalingConfigurationId: *string,
	SecurityGroups: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.asGroupV1.AsGroupV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances">DeleteInstances</a></code> | <code>*string</code> | Whether to delete instances when they are removed from the AS group. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip">DeletePublicip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#delete_publicip AsGroupV1#delete_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName">ScalingGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#vpc_id AsGroupV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#available_zones AsGroupV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime">CoolDownTime</a></code> | <code>*f64</code> | The cooling duration, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber">DesireInstanceNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod">HealthPeriodicAuditGracePeriod</a></code> | <code>*f64</code> | The grace period for instance health check, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod">HealthPeriodicAuditMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime">HealthPeriodicAuditTime</a></code> | <code>*f64</code> | The health check period for instances, in minutes. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#id AsGroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy">InstanceTerminatePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners">LbaasListeners</a></code> | <code>interface{}</code> | lbaas_listeners block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId">LbListenerId</a></code> | <code>*string</code> | The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber">MaxInstanceNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#max_instance_number AsGroupV1#max_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber">MinInstanceNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#min_instance_number AsGroupV1#min_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications">Notifications</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#notifications AsGroupV1#notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#region AsGroupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId">ScalingConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups">SecurityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | security_groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#tags AsGroupV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeleteInstances`<sup>Required</sup> <a name="DeleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances"></a>

```go
DeleteInstances *string
```

- *Type:* *string

Whether to delete instances when they are removed from the AS group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#delete_instances AsGroupV1#delete_instances}

---

##### `DeletePublicip`<sup>Required</sup> <a name="DeletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip"></a>

```go
DeletePublicip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#delete_publicip AsGroupV1#delete_publicip}.

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#networks AsGroupV1#networks}

---

##### `ScalingGroupName`<sup>Required</sup> <a name="ScalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName"></a>

```go
ScalingGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#vpc_id AsGroupV1#vpc_id}.

---

##### `AvailableZones`<sup>Optional</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones"></a>

```go
AvailableZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#available_zones AsGroupV1#available_zones}.

---

##### `CoolDownTime`<sup>Optional</sup> <a name="CoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime"></a>

```go
CoolDownTime *f64
```

- *Type:* *f64

The cooling duration, in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#cool_down_time AsGroupV1#cool_down_time}

---

##### `DesireInstanceNumber`<sup>Optional</sup> <a name="DesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber"></a>

```go
DesireInstanceNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}.

---

##### `HealthPeriodicAuditGracePeriod`<sup>Optional</sup> <a name="HealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod"></a>

```go
HealthPeriodicAuditGracePeriod *f64
```

- *Type:* *f64

The grace period for instance health check, in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}

---

##### `HealthPeriodicAuditMethod`<sup>Optional</sup> <a name="HealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod"></a>

```go
HealthPeriodicAuditMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}.

---

##### `HealthPeriodicAuditTime`<sup>Optional</sup> <a name="HealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime"></a>

```go
HealthPeriodicAuditTime *f64
```

- *Type:* *f64

The health check period for instances, in minutes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceTerminatePolicy`<sup>Optional</sup> <a name="InstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy"></a>

```go
InstanceTerminatePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}.

---

##### `LbaasListeners`<sup>Optional</sup> <a name="LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners"></a>

```go
LbaasListeners interface{}
```

- *Type:* interface{}

lbaas_listeners block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#lbaas_listeners AsGroupV1#lbaas_listeners}

---

##### `LbListenerId`<sup>Optional</sup> <a name="LbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId"></a>

```go
LbListenerId *string
```

- *Type:* *string

The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#lb_listener_id AsGroupV1#lb_listener_id}

---

##### `MaxInstanceNumber`<sup>Optional</sup> <a name="MaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber"></a>

```go
MaxInstanceNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#max_instance_number AsGroupV1#max_instance_number}.

---

##### `MinInstanceNumber`<sup>Optional</sup> <a name="MinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber"></a>

```go
MinInstanceNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#min_instance_number AsGroupV1#min_instance_number}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications"></a>

```go
Notifications *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#notifications AsGroupV1#notifications}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#region AsGroupV1#region}.

---

##### `ScalingConfigurationId`<sup>Optional</sup> <a name="ScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId"></a>

```go
ScalingConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups"></a>

```go
SecurityGroups AsGroupV1SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

security_groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#security_groups AsGroupV1#security_groups}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#tags AsGroupV1#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts"></a>

```go
Timeouts AsGroupV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#timeouts AsGroupV1#timeouts}

---

### AsGroupV1LbaasListeners <a name="AsGroupV1LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

&asgroupv1.AsGroupV1LbaasListeners {
	PoolId: *string,
	ProtocolPort: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId">PoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#pool_id AsGroupV1#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort">ProtocolPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#protocol_port AsGroupV1#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#weight AsGroupV1#weight}. |

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId"></a>

```go
PoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#pool_id AsGroupV1#pool_id}.

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort"></a>

```go
ProtocolPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#protocol_port AsGroupV1#protocol_port}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#weight AsGroupV1#weight}.

---

### AsGroupV1Networks <a name="AsGroupV1Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

&asgroupv1.AsGroupV1Networks {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#id AsGroupV1#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1SecurityGroups <a name="AsGroupV1SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

&asgroupv1.AsGroupV1SecurityGroups {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#id AsGroupV1#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1Timeouts <a name="AsGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

&asgroupv1.AsGroupV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#create AsGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#delete AsGroupV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#create AsGroupV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/as_group_v1#delete AsGroupV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsGroupV1LbaasListenersList <a name="AsGroupV1LbaasListenersList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.NewAsGroupV1LbaasListenersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AsGroupV1LbaasListenersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get"></a>

```go
func Get(index *f64) AsGroupV1LbaasListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsGroupV1LbaasListenersOutputReference <a name="AsGroupV1LbaasListenersOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.NewAsGroupV1LbaasListenersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AsGroupV1LbaasListenersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput">PoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput">ProtocolPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort">ProtocolPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput"></a>

```go
func PoolIdInput() *string
```

- *Type:* *string

---

##### `ProtocolPortInput`<sup>Optional</sup> <a name="ProtocolPortInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput"></a>

```go
func ProtocolPortInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `ProtocolPort`<sup>Required</sup> <a name="ProtocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort"></a>

```go
func ProtocolPort() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsGroupV1NetworksList <a name="AsGroupV1NetworksList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.NewAsGroupV1NetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AsGroupV1NetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get"></a>

```go
func Get(index *f64) AsGroupV1NetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsGroupV1NetworksOutputReference <a name="AsGroupV1NetworksOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.NewAsGroupV1NetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AsGroupV1NetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsGroupV1SecurityGroupsOutputReference <a name="AsGroupV1SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.NewAsGroupV1SecurityGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AsGroupV1SecurityGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() AsGroupV1SecurityGroups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---


### AsGroupV1TimeoutsOutputReference <a name="AsGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/asgroupv1"

asgroupv1.NewAsGroupV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AsGroupV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



