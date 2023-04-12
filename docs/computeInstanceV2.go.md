# `computeInstanceV2` Submodule <a name="`computeInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.computeInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceV2 <a name="ComputeInstanceV2" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2 opentelekomcloud_compute_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2(scope Construct, id *string, config ComputeInstanceV2Config) ComputeInstanceV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config">ComputeInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config">ComputeInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putBlockDevice">PutBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putSchedulerHints">PutSchedulerHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAccessIpV4">ResetAccessIpV4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAccessIpV6">ResetAccessIpV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAdminPass">ResetAdminPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAutoRecovery">ResetAutoRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetBlockDevice">ResetBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetConfigDrive">ResetConfigDrive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetFlavorName">ResetFlavorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetPowerState">ResetPowerState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetSchedulerHints">ResetSchedulerHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetSshPrivateKeyPath">ResetSshPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetStopBeforeDestroy">ResetStopBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBlockDevice` <a name="PutBlockDevice" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putBlockDevice"></a>

```go
func PutBlockDevice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putBlockDevice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putNetwork"></a>

```go
func PutNetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putNetwork.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedulerHints` <a name="PutSchedulerHints" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putSchedulerHints"></a>

```go
func PutSchedulerHints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putSchedulerHints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putTimeouts"></a>

```go
func PutTimeouts(value ComputeInstanceV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

---

##### `ResetAccessIpV4` <a name="ResetAccessIpV4" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAccessIpV4"></a>

```go
func ResetAccessIpV4()
```

##### `ResetAccessIpV6` <a name="ResetAccessIpV6" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAccessIpV6"></a>

```go
func ResetAccessIpV6()
```

##### `ResetAdminPass` <a name="ResetAdminPass" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAdminPass"></a>

```go
func ResetAdminPass()
```

##### `ResetAutoRecovery` <a name="ResetAutoRecovery" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAutoRecovery"></a>

```go
func ResetAutoRecovery()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBlockDevice` <a name="ResetBlockDevice" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetBlockDevice"></a>

```go
func ResetBlockDevice()
```

##### `ResetConfigDrive` <a name="ResetConfigDrive" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetConfigDrive"></a>

```go
func ResetConfigDrive()
```

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetFlavorId"></a>

```go
func ResetFlavorId()
```

##### `ResetFlavorName` <a name="ResetFlavorName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetFlavorName"></a>

```go
func ResetFlavorName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetKeyPair"></a>

```go
func ResetKeyPair()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPowerState` <a name="ResetPowerState" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetPowerState"></a>

```go
func ResetPowerState()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSchedulerHints` <a name="ResetSchedulerHints" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetSchedulerHints"></a>

```go
func ResetSchedulerHints()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSshPrivateKeyPath` <a name="ResetSshPrivateKeyPath" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetSshPrivateKeyPath"></a>

```go
func ResetSshPrivateKeyPath()
```

##### `ResetStopBeforeDestroy` <a name="ResetStopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetStopBeforeDestroy"></a>

```go
func ResetStopBeforeDestroy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.resetUserData"></a>

```go
func ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.ComputeInstanceV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.ComputeInstanceV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.ComputeInstanceV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.allMetadata">AllMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.blockDevice">BlockDevice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList">ComputeInstanceV2BlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.encryptedPassword">EncryptedPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.network">Network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList">ComputeInstanceV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.schedulerHints">SchedulerHints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList">ComputeInstanceV2SchedulerHintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference">ComputeInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.volumeAttached">VolumeAttached</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList">ComputeInstanceV2VolumeAttachedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV4Input">AccessIpV4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV6Input">AccessIpV6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.adminPassInput">AdminPassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.autoRecoveryInput">AutoRecoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.blockDeviceInput">BlockDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.configDriveInput">ConfigDriveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorNameInput">FlavorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.keyPairInput">KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.networkInput">NetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.powerStateInput">PowerStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.schedulerHintsInput">SchedulerHintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.sshPrivateKeyPathInput">SshPrivateKeyPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroyInput">StopBeforeDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV4">AccessIpV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV6">AccessIpV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.adminPass">AdminPass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.autoRecovery">AutoRecovery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.configDrive">ConfigDrive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorId">FlavorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorName">FlavorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.keyPair">KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.powerState">PowerState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.sshPrivateKeyPath">SshPrivateKeyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllMetadata`<sup>Required</sup> <a name="AllMetadata" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.allMetadata"></a>

```go
func AllMetadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `BlockDevice`<sup>Required</sup> <a name="BlockDevice" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.blockDevice"></a>

```go
func BlockDevice() ComputeInstanceV2BlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList">ComputeInstanceV2BlockDeviceList</a>

---

##### `EncryptedPassword`<sup>Required</sup> <a name="EncryptedPassword" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.encryptedPassword"></a>

```go
func EncryptedPassword() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.network"></a>

```go
func Network() ComputeInstanceV2NetworkList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList">ComputeInstanceV2NetworkList</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SchedulerHints`<sup>Required</sup> <a name="SchedulerHints" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.schedulerHints"></a>

```go
func SchedulerHints() ComputeInstanceV2SchedulerHintsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList">ComputeInstanceV2SchedulerHintsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.timeouts"></a>

```go
func Timeouts() ComputeInstanceV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference">ComputeInstanceV2TimeoutsOutputReference</a>

---

##### `VolumeAttached`<sup>Required</sup> <a name="VolumeAttached" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.volumeAttached"></a>

```go
func VolumeAttached() ComputeInstanceV2VolumeAttachedList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList">ComputeInstanceV2VolumeAttachedList</a>

---

##### `AccessIpV4Input`<sup>Optional</sup> <a name="AccessIpV4Input" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV4Input"></a>

```go
func AccessIpV4Input() *string
```

- *Type:* *string

---

##### `AccessIpV6Input`<sup>Optional</sup> <a name="AccessIpV6Input" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV6Input"></a>

```go
func AccessIpV6Input() *string
```

- *Type:* *string

---

##### `AdminPassInput`<sup>Optional</sup> <a name="AdminPassInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.adminPassInput"></a>

```go
func AdminPassInput() *string
```

- *Type:* *string

---

##### `AutoRecoveryInput`<sup>Optional</sup> <a name="AutoRecoveryInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.autoRecoveryInput"></a>

```go
func AutoRecoveryInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BlockDeviceInput`<sup>Optional</sup> <a name="BlockDeviceInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.blockDeviceInput"></a>

```go
func BlockDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigDriveInput`<sup>Optional</sup> <a name="ConfigDriveInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.configDriveInput"></a>

```go
func ConfigDriveInput() interface{}
```

- *Type:* interface{}

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorIdInput"></a>

```go
func FlavorIdInput() *string
```

- *Type:* *string

---

##### `FlavorNameInput`<sup>Optional</sup> <a name="FlavorNameInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorNameInput"></a>

```go
func FlavorNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.keyPairInput"></a>

```go
func KeyPairInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.networkInput"></a>

```go
func NetworkInput() interface{}
```

- *Type:* interface{}

---

##### `PowerStateInput`<sup>Optional</sup> <a name="PowerStateInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.powerStateInput"></a>

```go
func PowerStateInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SchedulerHintsInput`<sup>Optional</sup> <a name="SchedulerHintsInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.schedulerHintsInput"></a>

```go
func SchedulerHintsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshPrivateKeyPathInput`<sup>Optional</sup> <a name="SshPrivateKeyPathInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.sshPrivateKeyPathInput"></a>

```go
func SshPrivateKeyPathInput() *string
```

- *Type:* *string

---

##### `StopBeforeDestroyInput`<sup>Optional</sup> <a name="StopBeforeDestroyInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroyInput"></a>

```go
func StopBeforeDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AccessIpV4`<sup>Required</sup> <a name="AccessIpV4" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV4"></a>

```go
func AccessIpV4() *string
```

- *Type:* *string

---

##### `AccessIpV6`<sup>Required</sup> <a name="AccessIpV6" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.accessIpV6"></a>

```go
func AccessIpV6() *string
```

- *Type:* *string

---

##### `AdminPass`<sup>Required</sup> <a name="AdminPass" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.adminPass"></a>

```go
func AdminPass() *string
```

- *Type:* *string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.autoRecovery"></a>

```go
func AutoRecovery() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `ConfigDrive`<sup>Required</sup> <a name="ConfigDrive" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.configDrive"></a>

```go
func ConfigDrive() interface{}
```

- *Type:* interface{}

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorId"></a>

```go
func FlavorId() *string
```

- *Type:* *string

---

##### `FlavorName`<sup>Required</sup> <a name="FlavorName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.flavorName"></a>

```go
func FlavorName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.keyPair"></a>

```go
func KeyPair() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PowerState`<sup>Required</sup> <a name="PowerState" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.powerState"></a>

```go
func PowerState() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SshPrivateKeyPath`<sup>Required</sup> <a name="SshPrivateKeyPath" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.sshPrivateKeyPath"></a>

```go
func SshPrivateKeyPath() *string
```

- *Type:* *string

---

##### `StopBeforeDestroy`<sup>Required</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroy"></a>

```go
func StopBeforeDestroy() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceV2BlockDevice <a name="ComputeInstanceV2BlockDevice" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

&computeinstancev2.ComputeInstanceV2BlockDevice {
	SourceType: *string,
	BootIndex: *f64,
	DeleteOnTermination: interface{},
	DestinationType: *string,
	DeviceName: *string,
	GuestFormat: *string,
	Uuid: *string,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#source_type ComputeInstanceV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.bootIndex">BootIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#device_name ComputeInstanceV2#device_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.guestFormat">GuestFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.uuid">Uuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#uuid ComputeInstanceV2#uuid}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#source_type ComputeInstanceV2#source_type}.

---

##### `BootIndex`<sup>Optional</sup> <a name="BootIndex" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.bootIndex"></a>

```go
BootIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}.

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}.

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#device_name ComputeInstanceV2#device_name}.

---

##### `GuestFormat`<sup>Optional</sup> <a name="GuestFormat" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.guestFormat"></a>

```go
GuestFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#uuid ComputeInstanceV2#uuid}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}.

---

### ComputeInstanceV2Config <a name="ComputeInstanceV2Config" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

&computeinstancev2.ComputeInstanceV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessIpV4: *string,
	AccessIpV6: *string,
	AdminPass: *string,
	AutoRecovery: interface{},
	AvailabilityZone: *string,
	BlockDevice: interface{},
	ConfigDrive: interface{},
	FlavorId: *string,
	FlavorName: *string,
	Id: *string,
	ImageId: *string,
	ImageName: *string,
	KeyPair: *string,
	Metadata: *map[string]*string,
	Network: interface{},
	PowerState: *string,
	Region: *string,
	SchedulerHints: interface{},
	SecurityGroups: *[]*string,
	SshPrivateKeyPath: *string,
	StopBeforeDestroy: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#name ComputeInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV4">AccessIpV4</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV6">AccessIpV6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.adminPass">AdminPass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.autoRecovery">AutoRecovery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#auto_recovery ComputeInstanceV2#auto_recovery}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.blockDevice">BlockDevice</a></code> | <code>interface{}</code> | block_device block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.configDrive">ConfigDrive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.flavorId">FlavorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.flavorName">FlavorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#id ComputeInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#image_id ComputeInstanceV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#image_name ComputeInstanceV2#image_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.keyPair">KeyPair</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#metadata ComputeInstanceV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.network">Network</a></code> | <code>interface{}</code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.powerState">PowerState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#power_state ComputeInstanceV2#power_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#region ComputeInstanceV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.schedulerHints">SchedulerHints</a></code> | <code>interface{}</code> | scheduler_hints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.sshPrivateKeyPath">SshPrivateKeyPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#ssh_private_key_path ComputeInstanceV2#ssh_private_key_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#tags ComputeInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.userData">UserData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#user_data ComputeInstanceV2#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#name ComputeInstanceV2#name}.

---

##### `AccessIpV4`<sup>Optional</sup> <a name="AccessIpV4" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV4"></a>

```go
AccessIpV4 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}.

---

##### `AccessIpV6`<sup>Optional</sup> <a name="AccessIpV6" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV6"></a>

```go
AccessIpV6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}.

---

##### `AdminPass`<sup>Optional</sup> <a name="AdminPass" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.adminPass"></a>

```go
AdminPass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}.

---

##### `AutoRecovery`<sup>Optional</sup> <a name="AutoRecovery" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.autoRecovery"></a>

```go
AutoRecovery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#auto_recovery ComputeInstanceV2#auto_recovery}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}.

---

##### `BlockDevice`<sup>Optional</sup> <a name="BlockDevice" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.blockDevice"></a>

```go
BlockDevice interface{}
```

- *Type:* interface{}

block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#block_device ComputeInstanceV2#block_device}

---

##### `ConfigDrive`<sup>Optional</sup> <a name="ConfigDrive" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.configDrive"></a>

```go
ConfigDrive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}.

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.flavorId"></a>

```go
FlavorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}.

---

##### `FlavorName`<sup>Optional</sup> <a name="FlavorName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.flavorName"></a>

```go
FlavorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#id ComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#image_id ComputeInstanceV2#image_id}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#image_name ComputeInstanceV2#image_name}.

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.keyPair"></a>

```go
KeyPair *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#metadata ComputeInstanceV2#metadata}.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.network"></a>

```go
Network interface{}
```

- *Type:* interface{}

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#network ComputeInstanceV2#network}

---

##### `PowerState`<sup>Optional</sup> <a name="PowerState" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.powerState"></a>

```go
PowerState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#power_state ComputeInstanceV2#power_state}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#region ComputeInstanceV2#region}.

---

##### `SchedulerHints`<sup>Optional</sup> <a name="SchedulerHints" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.schedulerHints"></a>

```go
SchedulerHints interface{}
```

- *Type:* interface{}

scheduler_hints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#scheduler_hints ComputeInstanceV2#scheduler_hints}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}.

---

##### `SshPrivateKeyPath`<sup>Optional</sup> <a name="SshPrivateKeyPath" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.sshPrivateKeyPath"></a>

```go
SshPrivateKeyPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#ssh_private_key_path ComputeInstanceV2#ssh_private_key_path}.

---

##### `StopBeforeDestroy`<sup>Optional</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.stopBeforeDestroy"></a>

```go
StopBeforeDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#tags ComputeInstanceV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.timeouts"></a>

```go
Timeouts ComputeInstanceV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#timeouts ComputeInstanceV2#timeouts}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Config.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#user_data ComputeInstanceV2#user_data}.

---

### ComputeInstanceV2Network <a name="ComputeInstanceV2Network" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

&computeinstancev2.ComputeInstanceV2Network {
	AccessNetwork: interface{},
	FixedIpV4: *string,
	FixedIpV6: *string,
	Name: *string,
	Port: *string,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.accessNetwork">AccessNetwork</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_network ComputeInstanceV2#access_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV4">FixedIpV4</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV6">FixedIpV6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#name ComputeInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#port ComputeInstanceV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.uuid">Uuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#uuid ComputeInstanceV2#uuid}. |

---

##### `AccessNetwork`<sup>Optional</sup> <a name="AccessNetwork" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.accessNetwork"></a>

```go
AccessNetwork interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#access_network ComputeInstanceV2#access_network}.

---

##### `FixedIpV4`<sup>Optional</sup> <a name="FixedIpV4" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV4"></a>

```go
FixedIpV4 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}.

---

##### `FixedIpV6`<sup>Optional</sup> <a name="FixedIpV6" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV6"></a>

```go
FixedIpV6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#name ComputeInstanceV2#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#port ComputeInstanceV2#port}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Network.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#uuid ComputeInstanceV2#uuid}.

---

### ComputeInstanceV2SchedulerHints <a name="ComputeInstanceV2SchedulerHints" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

&computeinstancev2.ComputeInstanceV2SchedulerHints {
	BuildNearHostIp: *string,
	DehId: *string,
	DifferentHost: *[]*string,
	Group: *string,
	Query: *[]*string,
	SameHost: *[]*string,
	TargetCell: *string,
	Tenancy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.buildNearHostIp">BuildNearHostIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.dehId">DehId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#deh_id ComputeInstanceV2#deh_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentHost">DifferentHost</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#different_host ComputeInstanceV2#different_host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.group">Group</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#group ComputeInstanceV2#group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.query">Query</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#query ComputeInstanceV2#query}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.sameHost">SameHost</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#same_host ComputeInstanceV2#same_host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.targetCell">TargetCell</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.tenancy">Tenancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#tenancy ComputeInstanceV2#tenancy}. |

---

##### `BuildNearHostIp`<sup>Optional</sup> <a name="BuildNearHostIp" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.buildNearHostIp"></a>

```go
BuildNearHostIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}.

---

##### `DehId`<sup>Optional</sup> <a name="DehId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.dehId"></a>

```go
DehId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#deh_id ComputeInstanceV2#deh_id}.

---

##### `DifferentHost`<sup>Optional</sup> <a name="DifferentHost" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentHost"></a>

```go
DifferentHost *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#different_host ComputeInstanceV2#different_host}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.group"></a>

```go
Group *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#group ComputeInstanceV2#group}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.query"></a>

```go
Query *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#query ComputeInstanceV2#query}.

---

##### `SameHost`<sup>Optional</sup> <a name="SameHost" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.sameHost"></a>

```go
SameHost *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#same_host ComputeInstanceV2#same_host}.

---

##### `TargetCell`<sup>Optional</sup> <a name="TargetCell" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.targetCell"></a>

```go
TargetCell *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#tenancy ComputeInstanceV2#tenancy}.

---

### ComputeInstanceV2Timeouts <a name="ComputeInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

&computeinstancev2.ComputeInstanceV2Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#create ComputeInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#delete ComputeInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#update ComputeInstanceV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#create ComputeInstanceV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#delete ComputeInstanceV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/compute_instance_v2#update ComputeInstanceV2#update}.

---

### ComputeInstanceV2VolumeAttached <a name="ComputeInstanceV2VolumeAttached" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttached"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttached.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

&computeinstancev2.ComputeInstanceV2VolumeAttached {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceV2BlockDeviceList <a name="ComputeInstanceV2BlockDeviceList" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2BlockDeviceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInstanceV2BlockDeviceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get"></a>

```go
func Get(index *f64) ComputeInstanceV2BlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceV2BlockDeviceOutputReference <a name="ComputeInstanceV2BlockDeviceOutputReference" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2BlockDeviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInstanceV2BlockDeviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetBootIndex">ResetBootIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetGuestFormat">ResetGuestFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootIndex` <a name="ResetBootIndex" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetBootIndex"></a>

```go
func ResetBootIndex()
```

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetGuestFormat` <a name="ResetGuestFormat" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetGuestFormat"></a>

```go
func ResetGuestFormat()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetUuid"></a>

```go
func ResetUuid()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndexInput">BootIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormatInput">GuestFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndex">BootIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormat">GuestFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootIndexInput`<sup>Optional</sup> <a name="BootIndexInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndexInput"></a>

```go
func BootIndexInput() *f64
```

- *Type:* *f64

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `GuestFormatInput`<sup>Optional</sup> <a name="GuestFormatInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormatInput"></a>

```go
func GuestFormatInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `BootIndex`<sup>Required</sup> <a name="BootIndex" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndex"></a>

```go
func BootIndex() *f64
```

- *Type:* *f64

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `GuestFormat`<sup>Required</sup> <a name="GuestFormat" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormat"></a>

```go
func GuestFormat() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceV2NetworkList <a name="ComputeInstanceV2NetworkList" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2NetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInstanceV2NetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.get"></a>

```go
func Get(index *f64) ComputeInstanceV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceV2NetworkOutputReference <a name="ComputeInstanceV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2NetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInstanceV2NetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetAccessNetwork">ResetAccessNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV4">ResetFixedIpV4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV6">ResetFixedIpV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessNetwork` <a name="ResetAccessNetwork" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetAccessNetwork"></a>

```go
func ResetAccessNetwork()
```

##### `ResetFixedIpV4` <a name="ResetFixedIpV4" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV4"></a>

```go
func ResetFixedIpV4()
```

##### `ResetFixedIpV6` <a name="ResetFixedIpV6" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV6"></a>

```go
func ResetFixedIpV6()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetUuid"></a>

```go
func ResetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.mac">Mac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetworkInput">AccessNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4Input">FixedIpV4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6Input">FixedIpV6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetwork">AccessNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4">FixedIpV4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6">FixedIpV6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.mac"></a>

```go
func Mac() *string
```

- *Type:* *string

---

##### `AccessNetworkInput`<sup>Optional</sup> <a name="AccessNetworkInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetworkInput"></a>

```go
func AccessNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `FixedIpV4Input`<sup>Optional</sup> <a name="FixedIpV4Input" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4Input"></a>

```go
func FixedIpV4Input() *string
```

- *Type:* *string

---

##### `FixedIpV6Input`<sup>Optional</sup> <a name="FixedIpV6Input" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6Input"></a>

```go
func FixedIpV6Input() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `AccessNetwork`<sup>Required</sup> <a name="AccessNetwork" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetwork"></a>

```go
func AccessNetwork() interface{}
```

- *Type:* interface{}

---

##### `FixedIpV4`<sup>Required</sup> <a name="FixedIpV4" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4"></a>

```go
func FixedIpV4() *string
```

- *Type:* *string

---

##### `FixedIpV6`<sup>Required</sup> <a name="FixedIpV6" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6"></a>

```go
func FixedIpV6() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceV2SchedulerHintsList <a name="ComputeInstanceV2SchedulerHintsList" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2SchedulerHintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInstanceV2SchedulerHintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get"></a>

```go
func Get(index *f64) ComputeInstanceV2SchedulerHintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceV2SchedulerHintsOutputReference <a name="ComputeInstanceV2SchedulerHintsOutputReference" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2SchedulerHintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInstanceV2SchedulerHintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetBuildNearHostIp">ResetBuildNearHostIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDehId">ResetDehId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentHost">ResetDifferentHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetSameHost">ResetSameHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTargetCell">ResetTargetCell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildNearHostIp` <a name="ResetBuildNearHostIp" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetBuildNearHostIp"></a>

```go
func ResetBuildNearHostIp()
```

##### `ResetDehId` <a name="ResetDehId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDehId"></a>

```go
func ResetDehId()
```

##### `ResetDifferentHost` <a name="ResetDifferentHost" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentHost"></a>

```go
func ResetDifferentHost()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetSameHost` <a name="ResetSameHost" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetSameHost"></a>

```go
func ResetSameHost()
```

##### `ResetTargetCell` <a name="ResetTargetCell" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTargetCell"></a>

```go
func ResetTargetCell()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTenancy"></a>

```go
func ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIpInput">BuildNearHostIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.dehIdInput">DehIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHostInput">DifferentHostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.queryInput">QueryInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHostInput">SameHostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCellInput">TargetCellInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIp">BuildNearHostIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.dehId">DehId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHost">DifferentHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.query">Query</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHost">SameHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCell">TargetCell</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildNearHostIpInput`<sup>Optional</sup> <a name="BuildNearHostIpInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIpInput"></a>

```go
func BuildNearHostIpInput() *string
```

- *Type:* *string

---

##### `DehIdInput`<sup>Optional</sup> <a name="DehIdInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.dehIdInput"></a>

```go
func DehIdInput() *string
```

- *Type:* *string

---

##### `DifferentHostInput`<sup>Optional</sup> <a name="DifferentHostInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHostInput"></a>

```go
func DifferentHostInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.queryInput"></a>

```go
func QueryInput() *[]*string
```

- *Type:* *[]*string

---

##### `SameHostInput`<sup>Optional</sup> <a name="SameHostInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHostInput"></a>

```go
func SameHostInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetCellInput`<sup>Optional</sup> <a name="TargetCellInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCellInput"></a>

```go
func TargetCellInput() *string
```

- *Type:* *string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `BuildNearHostIp`<sup>Required</sup> <a name="BuildNearHostIp" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIp"></a>

```go
func BuildNearHostIp() *string
```

- *Type:* *string

---

##### `DehId`<sup>Required</sup> <a name="DehId" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.dehId"></a>

```go
func DehId() *string
```

- *Type:* *string

---

##### `DifferentHost`<sup>Required</sup> <a name="DifferentHost" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHost"></a>

```go
func DifferentHost() *[]*string
```

- *Type:* *[]*string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.query"></a>

```go
func Query() *[]*string
```

- *Type:* *[]*string

---

##### `SameHost`<sup>Required</sup> <a name="SameHost" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHost"></a>

```go
func SameHost() *[]*string
```

- *Type:* *[]*string

---

##### `TargetCell`<sup>Required</sup> <a name="TargetCell" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCell"></a>

```go
func TargetCell() *string
```

- *Type:* *string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceV2TimeoutsOutputReference <a name="ComputeInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInstanceV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceV2VolumeAttachedList <a name="ComputeInstanceV2VolumeAttachedList" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2VolumeAttachedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInstanceV2VolumeAttachedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.get"></a>

```go
func Get(index *f64) ComputeInstanceV2VolumeAttachedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeInstanceV2VolumeAttachedOutputReference <a name="ComputeInstanceV2VolumeAttachedOutputReference" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/computeinstancev2"

computeinstancev2.NewComputeInstanceV2VolumeAttachedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInstanceV2VolumeAttachedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttached">ComputeInstanceV2VolumeAttached</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttachedOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInstanceV2VolumeAttached
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeInstanceV2.ComputeInstanceV2VolumeAttached">ComputeInstanceV2VolumeAttached</a>

---



