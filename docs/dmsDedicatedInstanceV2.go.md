# `dmsDedicatedInstanceV2` Submodule <a name="`dmsDedicatedInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDedicatedInstanceV2 <a name="DmsDedicatedInstanceV2" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2 opentelekomcloud_dms_dedicated_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.NewDmsDedicatedInstanceV2(scope Construct, id *string, config DmsDedicatedInstanceV2Config) DmsDedicatedInstanceV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config">DmsDedicatedInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config">DmsDedicatedInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses">PutCrossVpcAccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAccessUser">ResetAccessUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetArchType">ResetArchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAvailableZones">ResetAvailableZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetCrossVpcAccesses">ResetCrossVpcAccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedEnable">ResetDiskEncryptedEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedKey">ResetDiskEncryptedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnabledMechanisms">ResetEnabledMechanisms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnablePublicip">ResetEnablePublicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetIpv6Enable">ResetIpv6Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainBegin">ResetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainEnd">ResetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetNewTenantIps">ResetNewTenantIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPublicipId">ResetPublicipId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSecurityProtocol">ResetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSslEnable">ResetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCrossVpcAccesses` <a name="PutCrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses"></a>

```go
func PutCrossVpcAccesses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putCrossVpcAccesses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts"></a>

```go
func PutTimeouts(value DmsDedicatedInstanceV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

---

##### `ResetAccessUser` <a name="ResetAccessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAccessUser"></a>

```go
func ResetAccessUser()
```

##### `ResetArchType` <a name="ResetArchType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetArchType"></a>

```go
func ResetArchType()
```

##### `ResetAvailableZones` <a name="ResetAvailableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetAvailableZones"></a>

```go
func ResetAvailableZones()
```

##### `ResetCrossVpcAccesses` <a name="ResetCrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetCrossVpcAccesses"></a>

```go
func ResetCrossVpcAccesses()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiskEncryptedEnable` <a name="ResetDiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedEnable"></a>

```go
func ResetDiskEncryptedEnable()
```

##### `ResetDiskEncryptedKey` <a name="ResetDiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetDiskEncryptedKey"></a>

```go
func ResetDiskEncryptedKey()
```

##### `ResetEnabledMechanisms` <a name="ResetEnabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnabledMechanisms"></a>

```go
func ResetEnabledMechanisms()
```

##### `ResetEnablePublicip` <a name="ResetEnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetEnablePublicip"></a>

```go
func ResetEnablePublicip()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv6Enable` <a name="ResetIpv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetIpv6Enable"></a>

```go
func ResetIpv6Enable()
```

##### `ResetMaintainBegin` <a name="ResetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainBegin"></a>

```go
func ResetMaintainBegin()
```

##### `ResetMaintainEnd` <a name="ResetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetMaintainEnd"></a>

```go
func ResetMaintainEnd()
```

##### `ResetNewTenantIps` <a name="ResetNewTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetNewTenantIps"></a>

```go
func ResetNewTenantIps()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPublicipId` <a name="ResetPublicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetPublicipId"></a>

```go
func ResetPublicipId()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSecurityProtocol"></a>

```go
func ResetSecurityProtocol()
```

##### `ResetSslEnable` <a name="ResetSslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetSslEnable"></a>

```go
func ResetSslEnable()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsDedicatedInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.DmsDedicatedInstanceV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.DmsDedicatedInstanceV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.DmsDedicatedInstanceV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.DmsDedicatedInstanceV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DmsDedicatedInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsDedicatedInstanceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsDedicatedInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DmsDedicatedInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.certReplaced">CertReplaced</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectAddress">ConnectAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectorNodeNum">ConnectorNodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccesses">CrossVpcAccesses</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList">DmsDedicatedInstanceV2CrossVpcAccessesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dumping">Dumping</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.partitionNum">PartitionNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.podConnectAddress">PodConnectAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicBandwidth">PublicBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.resourceSpecCode">ResourceSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslTwoWayEnable">SslTwoWayEnable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageResourceId">StorageResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference">DmsDedicatedInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.usedStorageSpace">UsedStorageSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUserInput">AccessUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archTypeInput">ArchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZonesInput">AvailableZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNumInput">BrokerNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccessesInput">CrossVpcAccessesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnableInput">DiskEncryptedEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKeyInput">DiskEncryptedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanismsInput">EnabledMechanismsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicipInput">EnablePublicipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6EnableInput">Ipv6EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBeginInput">MaintainBeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEndInput">MaintainEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkIdInput">NetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIpsInput">NewTenantIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipIdInput">PublicipIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnableInput">SslEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpaceInput">StorageSpaceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCodeInput">StorageSpecCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUser">AccessUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNum">BrokerNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnable">DiskEncryptedEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKey">DiskEncryptedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanisms">EnabledMechanisms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicip">EnablePublicip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorId">FlavorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6Enable">Ipv6Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEnd">MaintainEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIps">NewTenantIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipId">PublicipId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicy">RetentionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnable">SslEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpace">StorageSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.bandwidth"></a>

```go
func Bandwidth() *string
```

- *Type:* *string

---

##### `CertReplaced`<sup>Required</sup> <a name="CertReplaced" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.certReplaced"></a>

```go
func CertReplaced() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConnectAddress`<sup>Required</sup> <a name="ConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectAddress"></a>

```go
func ConnectAddress() *string
```

- *Type:* *string

---

##### `ConnectorNodeNum`<sup>Required</sup> <a name="ConnectorNodeNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.connectorNodeNum"></a>

```go
func ConnectorNodeNum() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CrossVpcAccesses`<sup>Required</sup> <a name="CrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccesses"></a>

```go
func CrossVpcAccesses() DmsDedicatedInstanceV2CrossVpcAccessesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList">DmsDedicatedInstanceV2CrossVpcAccessesList</a>

---

##### `Dumping`<sup>Required</sup> <a name="Dumping" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.dumping"></a>

```go
func Dumping() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nodeNum"></a>

```go
func NodeNum() *f64
```

- *Type:* *f64

---

##### `PartitionNum`<sup>Required</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.partitionNum"></a>

```go
func PartitionNum() *f64
```

- *Type:* *f64

---

##### `PodConnectAddress`<sup>Required</sup> <a name="PodConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.podConnectAddress"></a>

```go
func PodConnectAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PublicBandwidth`<sup>Required</sup> <a name="PublicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicBandwidth"></a>

```go
func PublicBandwidth() *f64
```

- *Type:* *f64

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceSpecCode`<sup>Required</sup> <a name="ResourceSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.resourceSpecCode"></a>

```go
func ResourceSpecCode() *string
```

- *Type:* *string

---

##### `SslTwoWayEnable`<sup>Required</sup> <a name="SslTwoWayEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslTwoWayEnable"></a>

```go
func SslTwoWayEnable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageResourceId"></a>

```go
func StorageResourceId() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeouts"></a>

```go
func Timeouts() DmsDedicatedInstanceV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference">DmsDedicatedInstanceV2TimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsedStorageSpace`<sup>Required</sup> <a name="UsedStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.usedStorageSpace"></a>

```go
func UsedStorageSpace() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `AccessUserInput`<sup>Optional</sup> <a name="AccessUserInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUserInput"></a>

```go
func AccessUserInput() *string
```

- *Type:* *string

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archTypeInput"></a>

```go
func ArchTypeInput() *string
```

- *Type:* *string

---

##### `AvailableZonesInput`<sup>Optional</sup> <a name="AvailableZonesInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZonesInput"></a>

```go
func AvailableZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BrokerNumInput`<sup>Optional</sup> <a name="BrokerNumInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNumInput"></a>

```go
func BrokerNumInput() *f64
```

- *Type:* *f64

---

##### `CrossVpcAccessesInput`<sup>Optional</sup> <a name="CrossVpcAccessesInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.crossVpcAccessesInput"></a>

```go
func CrossVpcAccessesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskEncryptedEnableInput`<sup>Optional</sup> <a name="DiskEncryptedEnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnableInput"></a>

```go
func DiskEncryptedEnableInput() interface{}
```

- *Type:* interface{}

---

##### `DiskEncryptedKeyInput`<sup>Optional</sup> <a name="DiskEncryptedKeyInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKeyInput"></a>

```go
func DiskEncryptedKeyInput() *string
```

- *Type:* *string

---

##### `EnabledMechanismsInput`<sup>Optional</sup> <a name="EnabledMechanismsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanismsInput"></a>

```go
func EnabledMechanismsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePublicipInput`<sup>Optional</sup> <a name="EnablePublicipInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicipInput"></a>

```go
func EnablePublicipInput() interface{}
```

- *Type:* interface{}

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorIdInput"></a>

```go
func FlavorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv6EnableInput`<sup>Optional</sup> <a name="Ipv6EnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6EnableInput"></a>

```go
func Ipv6EnableInput() interface{}
```

- *Type:* interface{}

---

##### `MaintainBeginInput`<sup>Optional</sup> <a name="MaintainBeginInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBeginInput"></a>

```go
func MaintainBeginInput() *string
```

- *Type:* *string

---

##### `MaintainEndInput`<sup>Optional</sup> <a name="MaintainEndInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEndInput"></a>

```go
func MaintainEndInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkIdInput"></a>

```go
func NetworkIdInput() *string
```

- *Type:* *string

---

##### `NewTenantIpsInput`<sup>Optional</sup> <a name="NewTenantIpsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIpsInput"></a>

```go
func NewTenantIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PublicipIdInput`<sup>Optional</sup> <a name="PublicipIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipIdInput"></a>

```go
func PublicipIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocolInput"></a>

```go
func SecurityProtocolInput() *string
```

- *Type:* *string

---

##### `SslEnableInput`<sup>Optional</sup> <a name="SslEnableInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnableInput"></a>

```go
func SslEnableInput() interface{}
```

- *Type:* interface{}

---

##### `StorageSpaceInput`<sup>Optional</sup> <a name="StorageSpaceInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpaceInput"></a>

```go
func StorageSpaceInput() *f64
```

- *Type:* *f64

---

##### `StorageSpecCodeInput`<sup>Optional</sup> <a name="StorageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCodeInput"></a>

```go
func StorageSpecCodeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AccessUser`<sup>Required</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.accessUser"></a>

```go
func AccessUser() *string
```

- *Type:* *string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.availableZones"></a>

```go
func AvailableZones() *[]*string
```

- *Type:* *[]*string

---

##### `BrokerNum`<sup>Required</sup> <a name="BrokerNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.brokerNum"></a>

```go
func BrokerNum() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiskEncryptedEnable`<sup>Required</sup> <a name="DiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedEnable"></a>

```go
func DiskEncryptedEnable() interface{}
```

- *Type:* interface{}

---

##### `DiskEncryptedKey`<sup>Required</sup> <a name="DiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.diskEncryptedKey"></a>

```go
func DiskEncryptedKey() *string
```

- *Type:* *string

---

##### `EnabledMechanisms`<sup>Required</sup> <a name="EnabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enabledMechanisms"></a>

```go
func EnabledMechanisms() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePublicip`<sup>Required</sup> <a name="EnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.enablePublicip"></a>

```go
func EnablePublicip() interface{}
```

- *Type:* interface{}

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.flavorId"></a>

```go
func FlavorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv6Enable`<sup>Required</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.ipv6Enable"></a>

```go
func Ipv6Enable() interface{}
```

- *Type:* interface{}

---

##### `MaintainBegin`<sup>Required</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainBegin"></a>

```go
func MaintainBegin() *string
```

- *Type:* *string

---

##### `MaintainEnd`<sup>Required</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.maintainEnd"></a>

```go
func MaintainEnd() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `NewTenantIps`<sup>Required</sup> <a name="NewTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.newTenantIps"></a>

```go
func NewTenantIps() *[]*string
```

- *Type:* *[]*string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PublicipId`<sup>Required</sup> <a name="PublicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.publicipId"></a>

```go
func PublicipId() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.retentionPolicy"></a>

```go
func RetentionPolicy() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.securityProtocol"></a>

```go
func SecurityProtocol() *string
```

- *Type:* *string

---

##### `SslEnable`<sup>Required</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.sslEnable"></a>

```go
func SslEnable() interface{}
```

- *Type:* interface{}

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpace"></a>

```go
func StorageSpace() *f64
```

- *Type:* *f64

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.storageSpecCode"></a>

```go
func StorageSpecCode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDedicatedInstanceV2Config <a name="DmsDedicatedInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

&dmsdedicatedinstancev2.DmsDedicatedInstanceV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BrokerNum: *f64,
	EngineVersion: *string,
	FlavorId: *string,
	Name: *string,
	NetworkId: *string,
	SecurityGroupId: *string,
	StorageSpace: *f64,
	StorageSpecCode: *string,
	VpcId: *string,
	AccessUser: *string,
	ArchType: *string,
	AvailableZones: *[]*string,
	CrossVpcAccesses: interface{},
	Description: *string,
	DiskEncryptedEnable: interface{},
	DiskEncryptedKey: *string,
	EnabledMechanisms: *[]*string,
	EnablePublicip: interface{},
	Id: *string,
	Ipv6Enable: interface{},
	MaintainBegin: *string,
	MaintainEnd: *string,
	NewTenantIps: *[]*string,
	Password: *string,
	PublicipId: *[]*string,
	RetentionPolicy: *string,
	SecurityProtocol: *string,
	SslEnable: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.brokerNum">BrokerNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.flavorId">FlavorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.networkId">NetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpace">StorageSpace</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.accessUser">AccessUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.archType">ArchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.crossVpcAccesses">CrossVpcAccesses</a></code> | <code>interface{}</code> | cross_vpc_accesses block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedEnable">DiskEncryptedEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedKey">DiskEncryptedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enabledMechanisms">EnabledMechanisms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enablePublicip">EnablePublicip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.ipv6Enable">Ipv6Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainEnd">MaintainEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.newTenantIps">NewTenantIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.publicipId">PublicipId</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.retentionPolicy">RetentionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.sslEnable">SslEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrokerNum`<sup>Required</sup> <a name="BrokerNum" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.brokerNum"></a>

```go
BrokerNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}.

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}.

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.flavorId"></a>

```go
FlavorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}.

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.networkId"></a>

```go
NetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}.

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpace"></a>

```go
StorageSpace *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}.

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.storageSpecCode"></a>

```go
StorageSpecCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}.

---

##### `AccessUser`<sup>Optional</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.accessUser"></a>

```go
AccessUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}.

---

##### `ArchType`<sup>Optional</sup> <a name="ArchType" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.archType"></a>

```go
ArchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}.

---

##### `AvailableZones`<sup>Optional</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.availableZones"></a>

```go
AvailableZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}.

---

##### `CrossVpcAccesses`<sup>Optional</sup> <a name="CrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.crossVpcAccesses"></a>

```go
CrossVpcAccesses interface{}
```

- *Type:* interface{}

cross_vpc_accesses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#cross_vpc_accesses DmsDedicatedInstanceV2#cross_vpc_accesses}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}.

---

##### `DiskEncryptedEnable`<sup>Optional</sup> <a name="DiskEncryptedEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedEnable"></a>

```go
DiskEncryptedEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}.

---

##### `DiskEncryptedKey`<sup>Optional</sup> <a name="DiskEncryptedKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.diskEncryptedKey"></a>

```go
DiskEncryptedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}.

---

##### `EnabledMechanisms`<sup>Optional</sup> <a name="EnabledMechanisms" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enabledMechanisms"></a>

```go
EnabledMechanisms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}.

---

##### `EnablePublicip`<sup>Optional</sup> <a name="EnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.enablePublicip"></a>

```go
EnablePublicip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6Enable`<sup>Optional</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.ipv6Enable"></a>

```go
Ipv6Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}.

---

##### `MaintainBegin`<sup>Optional</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainBegin"></a>

```go
MaintainBegin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}.

---

##### `MaintainEnd`<sup>Optional</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.maintainEnd"></a>

```go
MaintainEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}.

---

##### `NewTenantIps`<sup>Optional</sup> <a name="NewTenantIps" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.newTenantIps"></a>

```go
NewTenantIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}.

---

##### `PublicipId`<sup>Optional</sup> <a name="PublicipId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.publicipId"></a>

```go
PublicipId *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.retentionPolicy"></a>

```go
RetentionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}.

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.securityProtocol"></a>

```go
SecurityProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}.

---

##### `SslEnable`<sup>Optional</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.sslEnable"></a>

```go
SslEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Config.property.timeouts"></a>

```go
Timeouts DmsDedicatedInstanceV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts">DmsDedicatedInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#timeouts DmsDedicatedInstanceV2#timeouts}

---

### DmsDedicatedInstanceV2CrossVpcAccesses <a name="DmsDedicatedInstanceV2CrossVpcAccesses" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

&dmsdedicatedinstancev2.DmsDedicatedInstanceV2CrossVpcAccesses {
	AdvertisedIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.property.advertisedIp">AdvertisedIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#advertised_ip DmsDedicatedInstanceV2#advertised_ip}. |

---

##### `AdvertisedIp`<sup>Optional</sup> <a name="AdvertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccesses.property.advertisedIp"></a>

```go
AdvertisedIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#advertised_ip DmsDedicatedInstanceV2#advertised_ip}.

---

### DmsDedicatedInstanceV2Timeouts <a name="DmsDedicatedInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

&dmsdedicatedinstancev2.DmsDedicatedInstanceV2Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#create DmsDedicatedInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#delete DmsDedicatedInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#update DmsDedicatedInstanceV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#create DmsDedicatedInstanceV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#delete DmsDedicatedInstanceV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/dms_dedicated_instance_v2#update DmsDedicatedInstanceV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDedicatedInstanceV2CrossVpcAccessesList <a name="DmsDedicatedInstanceV2CrossVpcAccessesList" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.NewDmsDedicatedInstanceV2CrossVpcAccessesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDedicatedInstanceV2CrossVpcAccessesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get"></a>

```go
func Get(index *f64) DmsDedicatedInstanceV2CrossVpcAccessesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDedicatedInstanceV2CrossVpcAccessesOutputReference <a name="DmsDedicatedInstanceV2CrossVpcAccessesOutputReference" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.NewDmsDedicatedInstanceV2CrossVpcAccessesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDedicatedInstanceV2CrossVpcAccessesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resetAdvertisedIp">ResetAdvertisedIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertisedIp` <a name="ResetAdvertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.resetAdvertisedIp"></a>

```go
func ResetAdvertisedIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.listenerIp">ListenerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.portId">PortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIpInput">AdvertisedIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIp">AdvertisedIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.listenerIp"></a>

```go
func ListenerIp() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortId`<sup>Required</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.portId"></a>

```go
func PortId() *string
```

- *Type:* *string

---

##### `AdvertisedIpInput`<sup>Optional</sup> <a name="AdvertisedIpInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIpInput"></a>

```go
func AdvertisedIpInput() *string
```

- *Type:* *string

---

##### `AdvertisedIp`<sup>Required</sup> <a name="AdvertisedIp" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.advertisedIp"></a>

```go
func AdvertisedIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2CrossVpcAccessesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDedicatedInstanceV2TimeoutsOutputReference <a name="DmsDedicatedInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dmsdedicatedinstancev2"

dmsdedicatedinstancev2.NewDmsDedicatedInstanceV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDedicatedInstanceV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsDedicatedInstanceV2.DmsDedicatedInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



