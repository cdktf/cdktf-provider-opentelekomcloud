# `dataOpentelekomcloudEvsVolumesV2` Submodule <a name="`dataOpentelekomcloudEvsVolumesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudEvsVolumesV2 <a name="DataOpentelekomcloudEvsVolumesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2 opentelekomcloud_evs_volumes_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.NewDataOpentelekomcloudEvsVolumesV2(scope Construct, id *string, config DataOpentelekomcloudEvsVolumesV2Config) DataOpentelekomcloudEvsVolumesV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config">DataOpentelekomcloudEvsVolumesV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config">DataOpentelekomcloudEvsVolumesV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetServerId">ResetServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetShareable">ResetShareable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeId">ResetVolumeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeTypeId">ResetVolumeTypeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetName"></a>

```go
func ResetName()
```

##### `ResetServerId` <a name="ResetServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetServerId"></a>

```go
func ResetServerId()
```

##### `ResetShareable` <a name="ResetShareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetShareable"></a>

```go
func ResetShareable()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeId"></a>

```go
func ResetVolumeId()
```

##### `ResetVolumeTypeId` <a name="ResetVolumeTypeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.resetVolumeTypeId"></a>

```go
func ResetVolumeTypeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudEvsVolumesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.DataOpentelekomcloudEvsVolumesV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.DataOpentelekomcloudEvsVolumesV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.DataOpentelekomcloudEvsVolumesV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.DataOpentelekomcloudEvsVolumesV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudEvsVolumesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudEvsVolumesV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudEvsVolumesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudEvsVolumesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList">DataOpentelekomcloudEvsVolumesV2VolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareableInput">ShareableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeIdInput">VolumeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareable">Shareable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeId">VolumeTypeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumes"></a>

```go
func Volumes() DataOpentelekomcloudEvsVolumesV2VolumesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList">DataOpentelekomcloudEvsVolumesV2VolumesList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `ShareableInput`<sup>Optional</sup> <a name="ShareableInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareableInput"></a>

```go
func ShareableInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `VolumeTypeIdInput`<sup>Optional</sup> <a name="VolumeTypeIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeIdInput"></a>

```go
func VolumeTypeIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `Shareable`<sup>Required</sup> <a name="Shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.shareable"></a>

```go
func Shareable() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `VolumeTypeId`<sup>Required</sup> <a name="VolumeTypeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.volumeTypeId"></a>

```go
func VolumeTypeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudEvsVolumesV2Config <a name="DataOpentelekomcloudEvsVolumesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

&dataopentelekomcloudevsvolumesv2.DataOpentelekomcloudEvsVolumesV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZone: *string,
	Id: *string,
	Name: *string,
	ServerId: *string,
	Shareable: interface{},
	Status: *string,
	Tags: *map[string]*string,
	VolumeId: *string,
	VolumeTypeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.shareable">Shareable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeId">VolumeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeTypeId">VolumeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#availability_zone DataOpentelekomcloudEvsVolumesV2#availability_zone}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#id DataOpentelekomcloudEvsVolumesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#name DataOpentelekomcloudEvsVolumesV2#name}.

---

##### `ServerId`<sup>Optional</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#server_id DataOpentelekomcloudEvsVolumesV2#server_id}.

---

##### `Shareable`<sup>Optional</sup> <a name="Shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.shareable"></a>

```go
Shareable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#shareable DataOpentelekomcloudEvsVolumesV2#shareable}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#status DataOpentelekomcloudEvsVolumesV2#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#tags DataOpentelekomcloudEvsVolumesV2#tags}.

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#volume_id DataOpentelekomcloudEvsVolumesV2#volume_id}.

---

##### `VolumeTypeId`<sup>Optional</sup> <a name="VolumeTypeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Config.property.volumeTypeId"></a>

```go
VolumeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/evs_volumes_v2#volume_type_id DataOpentelekomcloudEvsVolumesV2#volume_type_id}.

---

### DataOpentelekomcloudEvsVolumesV2Volumes <a name="DataOpentelekomcloudEvsVolumesV2Volumes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

&dataopentelekomcloudevsvolumesv2.DataOpentelekomcloudEvsVolumesV2Volumes {

}
```


### DataOpentelekomcloudEvsVolumesV2VolumesAttachments <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

&dataopentelekomcloudevsvolumesv2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.NewDataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference <a name="DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.NewDataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedAt">AttachedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedMode">AttachedMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments">DataOpentelekomcloudEvsVolumesV2VolumesAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedAt`<sup>Required</sup> <a name="AttachedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedAt"></a>

```go
func AttachedAt() *string
```

- *Type:* *string

---

##### `AttachedMode`<sup>Required</sup> <a name="AttachedMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.attachedMode"></a>

```go
func AttachedMode() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudEvsVolumesV2VolumesAttachments
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachments">DataOpentelekomcloudEvsVolumesV2VolumesAttachments</a>

---


### DataOpentelekomcloudEvsVolumesV2VolumesList <a name="DataOpentelekomcloudEvsVolumesV2VolumesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.NewDataOpentelekomcloudEvsVolumesV2VolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudEvsVolumesV2VolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudEvsVolumesV2VolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudEvsVolumesV2VolumesOutputReference <a name="DataOpentelekomcloudEvsVolumesV2VolumesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudevsvolumesv2"

dataopentelekomcloudevsvolumesv2.NewDataOpentelekomcloudEvsVolumesV2VolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudEvsVolumesV2VolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.attachments">Attachments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList">DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.bootable">Bootable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.createAt">CreateAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.shareable">Shareable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.updateAt">UpdateAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.wwn">Wwn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes">DataOpentelekomcloudEvsVolumesV2Volumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.attachments"></a>

```go
func Attachments() DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList">DataOpentelekomcloudEvsVolumesV2VolumesAttachmentsList</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Bootable`<sup>Required</sup> <a name="Bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.bootable"></a>

```go
func Bootable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreateAt`<sup>Required</sup> <a name="CreateAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.createAt"></a>

```go
func CreateAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `Shareable`<sup>Required</sup> <a name="Shareable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.shareable"></a>

```go
func Shareable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UpdateAt`<sup>Required</sup> <a name="UpdateAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.updateAt"></a>

```go
func UpdateAt() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `Wwn`<sup>Required</sup> <a name="Wwn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.wwn"></a>

```go
func Wwn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2VolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudEvsVolumesV2Volumes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudEvsVolumesV2.DataOpentelekomcloudEvsVolumesV2Volumes">DataOpentelekomcloudEvsVolumesV2Volumes</a>

---



