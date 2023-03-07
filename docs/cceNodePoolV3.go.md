# `cceNodePoolV3` Submodule <a name="`cceNodePoolV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodePoolV3 <a name="CceNodePoolV3" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3 opentelekomcloud_cce_node_pool_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.NewCceNodePoolV3(scope Construct, id *string, config CceNodePoolV3Config) CceNodePoolV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config">CceNodePoolV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config">CceNodePoolV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes">PutDataVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize">ResetDockerBaseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride">ResetDockerLvmConfigOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags">ResetK8STags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount">ResetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods">ResetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount">ResetMinNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs">ResetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall">ResetPostinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall">ResetPreinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime">ResetScaleDownCooldownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable">ResetScaleEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference">ResetServerGroupReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags">ResetUserTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDataVolumes` <a name="PutDataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes"></a>

```go
func PutDataVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume"></a>

```go
func PutRootVolume(value CceNodePoolV3RootVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts"></a>

```go
func PutTimeouts(value CceNodePoolV3Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetDockerBaseSize` <a name="ResetDockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize"></a>

```go
func ResetDockerBaseSize()
```

##### `ResetDockerLvmConfigOverride` <a name="ResetDockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride"></a>

```go
func ResetDockerLvmConfigOverride()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId"></a>

```go
func ResetId()
```

##### `ResetK8STags` <a name="ResetK8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags"></a>

```go
func ResetK8STags()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair"></a>

```go
func ResetKeyPair()
```

##### `ResetMaxNodeCount` <a name="ResetMaxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount"></a>

```go
func ResetMaxNodeCount()
```

##### `ResetMaxPods` <a name="ResetMaxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods"></a>

```go
func ResetMaxPods()
```

##### `ResetMinNodeCount` <a name="ResetMinNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount"></a>

```go
func ResetMinNodeCount()
```

##### `ResetOs` <a name="ResetOs" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs"></a>

```go
func ResetOs()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPostinstall` <a name="ResetPostinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall"></a>

```go
func ResetPostinstall()
```

##### `ResetPreinstall` <a name="ResetPreinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall"></a>

```go
func ResetPreinstall()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetScaleDownCooldownTime` <a name="ResetScaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime"></a>

```go
func ResetScaleDownCooldownTime()
```

##### `ResetScaleEnable` <a name="ResetScaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable"></a>

```go
func ResetScaleEnable()
```

##### `ResetServerGroupReference` <a name="ResetServerGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference"></a>

```go
func ResetServerGroupReference()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints"></a>

```go
func ResetTaints()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserTags` <a name="ResetUserTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags"></a>

```go
func ResetUserTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.CceNodePoolV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.CceNodePoolV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.CceNodePoolV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes">DataVolumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput">DataVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput">DockerBaseSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput">DockerLvmConfigOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput">FlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput">InitialNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput">K8STagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput">KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput">MaxPodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput">OsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput">PostinstallInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput">PreinstallInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput">ScaleDownCooldownTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput">ScaleEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput">ServerGroupReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput">UserTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize">DockerBaseSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride">DockerLvmConfigOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor">Flavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount">InitialNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags">K8STags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair">KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods">MaxPods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall">Postinstall</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall">Preinstall</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime">ScaleDownCooldownTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable">ScaleEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference">ServerGroupReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags">UserTags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataVolumes`<sup>Required</sup> <a name="DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes"></a>

```go
func DataVolumes() CceNodePoolV3DataVolumesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume"></a>

```go
func RootVolume() CceNodePoolV3RootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints"></a>

```go
func Taints() CceNodePoolV3TaintsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts"></a>

```go
func Timeouts() CceNodePoolV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `DataVolumesInput`<sup>Optional</sup> <a name="DataVolumesInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput"></a>

```go
func DataVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `DockerBaseSizeInput`<sup>Optional</sup> <a name="DockerBaseSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput"></a>

```go
func DockerBaseSizeInput() *f64
```

- *Type:* *f64

---

##### `DockerLvmConfigOverrideInput`<sup>Optional</sup> <a name="DockerLvmConfigOverrideInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput"></a>

```go
func DockerLvmConfigOverrideInput() *string
```

- *Type:* *string

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput"></a>

```go
func FlavorInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialNodeCountInput`<sup>Optional</sup> <a name="InitialNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput"></a>

```go
func InitialNodeCountInput() *f64
```

- *Type:* *f64

---

##### `K8STagsInput`<sup>Optional</sup> <a name="K8STagsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput"></a>

```go
func K8STagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput"></a>

```go
func KeyPairInput() *string
```

- *Type:* *string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MaxPodsInput`<sup>Optional</sup> <a name="MaxPodsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput"></a>

```go
func MaxPodsInput() *f64
```

- *Type:* *f64

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput"></a>

```go
func OsInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PostinstallInput`<sup>Optional</sup> <a name="PostinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput"></a>

```go
func PostinstallInput() *string
```

- *Type:* *string

---

##### `PreinstallInput`<sup>Optional</sup> <a name="PreinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput"></a>

```go
func PreinstallInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput"></a>

```go
func RootVolumeInput() CceNodePoolV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---

##### `ScaleDownCooldownTimeInput`<sup>Optional</sup> <a name="ScaleDownCooldownTimeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput"></a>

```go
func ScaleDownCooldownTimeInput() *f64
```

- *Type:* *f64

---

##### `ScaleEnableInput`<sup>Optional</sup> <a name="ScaleEnableInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput"></a>

```go
func ScaleEnableInput() interface{}
```

- *Type:* interface{}

---

##### `ServerGroupReferenceInput`<sup>Optional</sup> <a name="ServerGroupReferenceInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput"></a>

```go
func ServerGroupReferenceInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserTagsInput`<sup>Optional</sup> <a name="UserTagsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput"></a>

```go
func UserTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DockerBaseSize`<sup>Required</sup> <a name="DockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize"></a>

```go
func DockerBaseSize() *f64
```

- *Type:* *f64

---

##### `DockerLvmConfigOverride`<sup>Required</sup> <a name="DockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride"></a>

```go
func DockerLvmConfigOverride() *string
```

- *Type:* *string

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor"></a>

```go
func Flavor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialNodeCount`<sup>Required</sup> <a name="InitialNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount"></a>

```go
func InitialNodeCount() *f64
```

- *Type:* *f64

---

##### `K8STags`<sup>Required</sup> <a name="K8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags"></a>

```go
func K8STags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair"></a>

```go
func KeyPair() *string
```

- *Type:* *string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods"></a>

```go
func MaxPods() *f64
```

- *Type:* *f64

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount"></a>

```go
func MinNodeCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Postinstall`<sup>Required</sup> <a name="Postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall"></a>

```go
func Postinstall() *string
```

- *Type:* *string

---

##### `Preinstall`<sup>Required</sup> <a name="Preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall"></a>

```go
func Preinstall() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ScaleDownCooldownTime`<sup>Required</sup> <a name="ScaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime"></a>

```go
func ScaleDownCooldownTime() *f64
```

- *Type:* *f64

---

##### `ScaleEnable`<sup>Required</sup> <a name="ScaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable"></a>

```go
func ScaleEnable() interface{}
```

- *Type:* interface{}

---

##### `ServerGroupReference`<sup>Required</sup> <a name="ServerGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference"></a>

```go
func ServerGroupReference() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `UserTags`<sup>Required</sup> <a name="UserTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags"></a>

```go
func UserTags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodePoolV3Config <a name="CceNodePoolV3Config" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

&ccenodepoolv3.CceNodePoolV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	DataVolumes: interface{},
	Flavor: *string,
	InitialNodeCount: *f64,
	Name: *string,
	RootVolume: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume,
	AvailabilityZone: *string,
	DockerBaseSize: *f64,
	DockerLvmConfigOverride: *string,
	Id: *string,
	K8STags: *map[string]*string,
	KeyPair: *string,
	MaxNodeCount: *f64,
	MaxPods: *f64,
	MinNodeCount: *f64,
	Os: *string,
	Password: *string,
	Postinstall: *string,
	Preinstall: *string,
	Priority: *f64,
	ScaleDownCooldownTime: *f64,
	ScaleEnable: interface{},
	ServerGroupReference: *string,
	SubnetId: *string,
	Taints: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts,
	UserTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes">DataVolumes</a></code> | <code>interface{}</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor">Flavor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#flavor CceNodePoolV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount">InitialNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#name CceNodePoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize">DockerBaseSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride">DockerLvmConfigOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#id CceNodePoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags">K8STags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair">KeyPair</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods">MaxPods</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os">Os</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#os CceNodePoolV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#password CceNodePoolV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall">Postinstall</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall">Preinstall</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#priority CceNodePoolV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime">ScaleDownCooldownTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable">ScaleEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference">ServerGroupReference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags">UserTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}.

---

##### `DataVolumes`<sup>Required</sup> <a name="DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes"></a>

```go
DataVolumes interface{}
```

- *Type:* interface{}

data_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#data_volumes CceNodePoolV3#data_volumes}

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor"></a>

```go
Flavor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#flavor CceNodePoolV3#flavor}.

---

##### `InitialNodeCount`<sup>Required</sup> <a name="InitialNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount"></a>

```go
InitialNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#name CceNodePoolV3#name}.

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume"></a>

```go
RootVolume CceNodePoolV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#root_volume CceNodePoolV3#root_volume}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}.

---

##### `DockerBaseSize`<sup>Optional</sup> <a name="DockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize"></a>

```go
DockerBaseSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}.

---

##### `DockerLvmConfigOverride`<sup>Optional</sup> <a name="DockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride"></a>

```go
DockerLvmConfigOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#id CceNodePoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `K8STags`<sup>Optional</sup> <a name="K8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags"></a>

```go
K8STags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}.

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair"></a>

```go
KeyPair *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}.

---

##### `MaxNodeCount`<sup>Optional</sup> <a name="MaxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount"></a>

```go
MaxNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}.

---

##### `MaxPods`<sup>Optional</sup> <a name="MaxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods"></a>

```go
MaxPods *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}.

---

##### `MinNodeCount`<sup>Optional</sup> <a name="MinNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount"></a>

```go
MinNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}.

---

##### `Os`<sup>Optional</sup> <a name="Os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os"></a>

```go
Os *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#os CceNodePoolV3#os}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#password CceNodePoolV3#password}.

---

##### `Postinstall`<sup>Optional</sup> <a name="Postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall"></a>

```go
Postinstall *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}.

---

##### `Preinstall`<sup>Optional</sup> <a name="Preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall"></a>

```go
Preinstall *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#priority CceNodePoolV3#priority}.

---

##### `ScaleDownCooldownTime`<sup>Optional</sup> <a name="ScaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime"></a>

```go
ScaleDownCooldownTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}.

---

##### `ScaleEnable`<sup>Optional</sup> <a name="ScaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable"></a>

```go
ScaleEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}.

---

##### `ServerGroupReference`<sup>Optional</sup> <a name="ServerGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference"></a>

```go
ServerGroupReference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}.

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#taints CceNodePoolV3#taints}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts"></a>

```go
Timeouts CceNodePoolV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#timeouts CceNodePoolV3#timeouts}

---

##### `UserTags`<sup>Optional</sup> <a name="UserTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags"></a>

```go
UserTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}.

---

### CceNodePoolV3DataVolumes <a name="CceNodePoolV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

&ccenodepoolv3.CceNodePoolV3DataVolumes {
	Size: *f64,
	Volumetype: *string,
	ExtendParam: *string,
	ExtendParams: *map[string]*string,
	KmsId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype">Volumetype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam">ExtendParam</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams">ExtendParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId">KmsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype"></a>

```go
Volumetype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `ExtendParam`<sup>Optional</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam"></a>

```go
ExtendParam *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `ExtendParams`<sup>Optional</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams"></a>

```go
ExtendParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `KmsId`<sup>Optional</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId"></a>

```go
KmsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3RootVolume <a name="CceNodePoolV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

&ccenodepoolv3.CceNodePoolV3RootVolume {
	Size: *f64,
	Volumetype: *string,
	ExtendParam: *string,
	ExtendParams: *map[string]*string,
	KmsId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype">Volumetype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam">ExtendParam</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams">ExtendParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId">KmsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype"></a>

```go
Volumetype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `ExtendParam`<sup>Optional</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam"></a>

```go
ExtendParam *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `ExtendParams`<sup>Optional</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams"></a>

```go
ExtendParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `KmsId`<sup>Optional</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId"></a>

```go
KmsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3Taints <a name="CceNodePoolV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

&ccenodepoolv3.CceNodePoolV3Taints {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#effect CceNodePoolV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#key CceNodePoolV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#value CceNodePoolV3#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#effect CceNodePoolV3#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#key CceNodePoolV3#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#value CceNodePoolV3#value}.

---

### CceNodePoolV3Timeouts <a name="CceNodePoolV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

&ccenodepoolv3.CceNodePoolV3Timeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#create CceNodePoolV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#default CceNodePoolV3#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#delete CceNodePoolV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#update CceNodePoolV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#create CceNodePoolV3#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#default CceNodePoolV3#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#delete CceNodePoolV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_node_pool_v3#update CceNodePoolV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodePoolV3DataVolumesList <a name="CceNodePoolV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.NewCceNodePoolV3DataVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CceNodePoolV3DataVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get"></a>

```go
func Get(index *f64) CceNodePoolV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CceNodePoolV3DataVolumesOutputReference <a name="CceNodePoolV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.NewCceNodePoolV3DataVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CceNodePoolV3DataVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam">ResetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams">ResetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId">ResetKmsId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtendParam` <a name="ResetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam"></a>

```go
func ResetExtendParam()
```

##### `ResetExtendParams` <a name="ResetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams"></a>

```go
func ResetExtendParams()
```

##### `ResetKmsId` <a name="ResetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId"></a>

```go
func ResetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput">ExtendParamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput">ExtendParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput">KmsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput">VolumetypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam">ExtendParam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams">ExtendParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId">KmsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype">Volumetype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtendParamInput`<sup>Optional</sup> <a name="ExtendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput"></a>

```go
func ExtendParamInput() *string
```

- *Type:* *string

---

##### `ExtendParamsInput`<sup>Optional</sup> <a name="ExtendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput"></a>

```go
func ExtendParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsIdInput`<sup>Optional</sup> <a name="KmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput"></a>

```go
func KmsIdInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `VolumetypeInput`<sup>Optional</sup> <a name="VolumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput"></a>

```go
func VolumetypeInput() *string
```

- *Type:* *string

---

##### `ExtendParam`<sup>Required</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam"></a>

```go
func ExtendParam() *string
```

- *Type:* *string

---

##### `ExtendParams`<sup>Required</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams"></a>

```go
func ExtendParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsId`<sup>Required</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId"></a>

```go
func KmsId() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype"></a>

```go
func Volumetype() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CceNodePoolV3RootVolumeOutputReference <a name="CceNodePoolV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.NewCceNodePoolV3RootVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CceNodePoolV3RootVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam">ResetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams">ResetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId">ResetKmsId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtendParam` <a name="ResetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam"></a>

```go
func ResetExtendParam()
```

##### `ResetExtendParams` <a name="ResetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams"></a>

```go
func ResetExtendParams()
```

##### `ResetKmsId` <a name="ResetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId"></a>

```go
func ResetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput">ExtendParamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput">ExtendParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput">KmsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput">VolumetypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam">ExtendParam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams">ExtendParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId">KmsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype">Volumetype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtendParamInput`<sup>Optional</sup> <a name="ExtendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput"></a>

```go
func ExtendParamInput() *string
```

- *Type:* *string

---

##### `ExtendParamsInput`<sup>Optional</sup> <a name="ExtendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput"></a>

```go
func ExtendParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsIdInput`<sup>Optional</sup> <a name="KmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput"></a>

```go
func KmsIdInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `VolumetypeInput`<sup>Optional</sup> <a name="VolumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput"></a>

```go
func VolumetypeInput() *string
```

- *Type:* *string

---

##### `ExtendParam`<sup>Required</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam"></a>

```go
func ExtendParam() *string
```

- *Type:* *string

---

##### `ExtendParams`<sup>Required</sup> <a name="ExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams"></a>

```go
func ExtendParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsId`<sup>Required</sup> <a name="KmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId"></a>

```go
func KmsId() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Volumetype`<sup>Required</sup> <a name="Volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype"></a>

```go
func Volumetype() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() CceNodePoolV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---


### CceNodePoolV3TaintsList <a name="CceNodePoolV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.NewCceNodePoolV3TaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CceNodePoolV3TaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get"></a>

```go
func Get(index *f64) CceNodePoolV3TaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CceNodePoolV3TaintsOutputReference <a name="CceNodePoolV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.NewCceNodePoolV3TaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CceNodePoolV3TaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CceNodePoolV3TimeoutsOutputReference <a name="CceNodePoolV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/ccenodepoolv3"

ccenodepoolv3.NewCceNodePoolV3TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CceNodePoolV3TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



