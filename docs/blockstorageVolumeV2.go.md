# `blockstorageVolumeV2` Submodule <a name="`blockstorageVolumeV2` Submodule" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageVolumeV2 <a name="BlockstorageVolumeV2" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2 opentelekomcloud_blockstorage_volume_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

blockstoragevolumev2.NewBlockstorageVolumeV2(scope Construct, id *string, config BlockstorageVolumeV2Config) BlockstorageVolumeV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config">BlockstorageVolumeV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config">BlockstorageVolumeV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetCascade">ResetCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetConsistencyGroupId">ResetConsistencyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceReplica">ResetSourceReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceVolId">ResetSourceVolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts"></a>

```go
func PutTimeouts(value BlockstorageVolumeV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetCascade` <a name="ResetCascade" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetCascade"></a>

```go
func ResetCascade()
```

##### `ResetConsistencyGroupId` <a name="ResetConsistencyGroupId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetConsistencyGroupId"></a>

```go
func ResetConsistencyGroupId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetSourceReplica` <a name="ResetSourceReplica" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceReplica"></a>

```go
func ResetSourceReplica()
```

##### `ResetSourceVolId` <a name="ResetSourceVolId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceVolId"></a>

```go
func ResetSourceVolId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.resetVolumeType"></a>

```go
func ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

blockstoragevolumev2.BlockstorageVolumeV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

blockstoragevolumev2.BlockstorageVolumeV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

blockstoragevolumev2.BlockstorageVolumeV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.attachment">Attachment</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList">BlockstorageVolumeV2AttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference">BlockstorageVolumeV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.wwn">Wwn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascadeInput">CascadeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupIdInput">ConsistencyGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplicaInput">SourceReplicaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolIdInput">SourceVolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascade">Cascade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupId">ConsistencyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceType">DeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplica">SourceReplica</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolId">SourceVolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.attachment"></a>

```go
func Attachment() BlockstorageVolumeV2AttachmentList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList">BlockstorageVolumeV2AttachmentList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeouts"></a>

```go
func Timeouts() BlockstorageVolumeV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference">BlockstorageVolumeV2TimeoutsOutputReference</a>

---

##### `Wwn`<sup>Required</sup> <a name="Wwn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.wwn"></a>

```go
func Wwn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `CascadeInput`<sup>Optional</sup> <a name="CascadeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascadeInput"></a>

```go
func CascadeInput() interface{}
```

- *Type:* interface{}

---

##### `ConsistencyGroupIdInput`<sup>Optional</sup> <a name="ConsistencyGroupIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupIdInput"></a>

```go
func ConsistencyGroupIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `SourceReplicaInput`<sup>Optional</sup> <a name="SourceReplicaInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplicaInput"></a>

```go
func SourceReplicaInput() *string
```

- *Type:* *string

---

##### `SourceVolIdInput`<sup>Optional</sup> <a name="SourceVolIdInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolIdInput"></a>

```go
func SourceVolIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Cascade`<sup>Required</sup> <a name="Cascade" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.cascade"></a>

```go
func Cascade() interface{}
```

- *Type:* interface{}

---

##### `ConsistencyGroupId`<sup>Required</sup> <a name="ConsistencyGroupId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupId"></a>

```go
func ConsistencyGroupId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.deviceType"></a>

```go
func DeviceType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `SourceReplica`<sup>Required</sup> <a name="SourceReplica" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplica"></a>

```go
func SourceReplica() *string
```

- *Type:* *string

---

##### `SourceVolId`<sup>Required</sup> <a name="SourceVolId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolId"></a>

```go
func SourceVolId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageVolumeV2Attachment <a name="BlockstorageVolumeV2Attachment" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

&blockstoragevolumev2.BlockstorageVolumeV2Attachment {

}
```


### BlockstorageVolumeV2Config <a name="BlockstorageVolumeV2Config" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

&blockstoragevolumev2.BlockstorageVolumeV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Size: *f64,
	AvailabilityZone: *string,
	Cascade: interface{},
	ConsistencyGroupId: *string,
	Description: *string,
	DeviceType: *string,
	Id: *string,
	ImageId: *string,
	Metadata: *map[string]*string,
	Name: *string,
	Region: *string,
	SnapshotId: *string,
	SourceReplica: *string,
	SourceVolId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#size BlockstorageVolumeV2#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.cascade">Cascade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#cascade BlockstorageVolumeV2#cascade}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.consistencyGroupId">ConsistencyGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#description BlockstorageVolumeV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.deviceType">DeviceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#device_type BlockstorageVolumeV2#device_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#id BlockstorageVolumeV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#name BlockstorageVolumeV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#region BlockstorageVolumeV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceReplica">SourceReplica</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceVolId">SourceVolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#tags BlockstorageVolumeV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#size BlockstorageVolumeV2#size}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}.

---

##### `Cascade`<sup>Optional</sup> <a name="Cascade" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.cascade"></a>

```go
Cascade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#cascade BlockstorageVolumeV2#cascade}.

---

##### `ConsistencyGroupId`<sup>Optional</sup> <a name="ConsistencyGroupId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.consistencyGroupId"></a>

```go
ConsistencyGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#description BlockstorageVolumeV2#description}.

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.deviceType"></a>

```go
DeviceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#device_type BlockstorageVolumeV2#device_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#id BlockstorageVolumeV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#name BlockstorageVolumeV2#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#region BlockstorageVolumeV2#region}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}.

---

##### `SourceReplica`<sup>Optional</sup> <a name="SourceReplica" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceReplica"></a>

```go
SourceReplica *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}.

---

##### `SourceVolId`<sup>Optional</sup> <a name="SourceVolId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceVolId"></a>

```go
SourceVolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#tags BlockstorageVolumeV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.timeouts"></a>

```go
Timeouts BlockstorageVolumeV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#timeouts BlockstorageVolumeV2#timeouts}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}.

---

### BlockstorageVolumeV2Timeouts <a name="BlockstorageVolumeV2Timeouts" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

&blockstoragevolumev2.BlockstorageVolumeV2Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#create BlockstorageVolumeV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#delete BlockstorageVolumeV2#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#create BlockstorageVolumeV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/blockstorage_volume_v2#delete BlockstorageVolumeV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageVolumeV2AttachmentList <a name="BlockstorageVolumeV2AttachmentList" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

blockstoragevolumev2.NewBlockstorageVolumeV2AttachmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BlockstorageVolumeV2AttachmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get"></a>

```go
func Get(index *f64) BlockstorageVolumeV2AttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BlockstorageVolumeV2AttachmentOutputReference <a name="BlockstorageVolumeV2AttachmentOutputReference" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

blockstoragevolumev2.NewBlockstorageVolumeV2AttachmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BlockstorageVolumeV2AttachmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.device">Device</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment">BlockstorageVolumeV2Attachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Device`<sup>Required</sup> <a name="Device" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.device"></a>

```go
func Device() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockstorageVolumeV2Attachment
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2Attachment">BlockstorageVolumeV2Attachment</a>

---


### BlockstorageVolumeV2TimeoutsOutputReference <a name="BlockstorageVolumeV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/blockstoragevolumev2"

blockstoragevolumev2.NewBlockstorageVolumeV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BlockstorageVolumeV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



