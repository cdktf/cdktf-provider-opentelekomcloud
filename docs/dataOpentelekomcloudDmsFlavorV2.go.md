# `dataOpentelekomcloudDmsFlavorV2` Submodule <a name="`dataOpentelekomcloudDmsFlavorV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDmsFlavorV2 <a name="DataOpentelekomcloudDmsFlavorV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2 opentelekomcloud_dms_flavor_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2(scope Construct, id *string, config DataOpentelekomcloudDmsFlavorV2Config) DataOpentelekomcloudDmsFlavorV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config">DataOpentelekomcloudDmsFlavorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config">DataOpentelekomcloudDmsFlavorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetArchType">ResetArchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetChargingMode">ResetChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetFlavorId">ResetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetStorageSpecCode">ResetStorageSpecCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArchType` <a name="ResetArchType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetArchType"></a>

```go
func ResetArchType()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetChargingMode` <a name="ResetChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetChargingMode"></a>

```go
func ResetChargingMode()
```

##### `ResetFlavorId` <a name="ResetFlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetFlavorId"></a>

```go
func ResetFlavorId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetId"></a>

```go
func ResetId()
```

##### `ResetStorageSpecCode` <a name="ResetStorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetStorageSpecCode"></a>

```go
func ResetStorageSpecCode()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDmsFlavorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudDmsFlavorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudDmsFlavorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudDmsFlavorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDmsFlavorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavors">Flavors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList">DataOpentelekomcloudDmsFlavorV2FlavorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.versions">Versions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archTypeInput">ArchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingModeInput">ChargingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorIdInput">FlavorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCodeInput">StorageSpecCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingMode">ChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorId">FlavorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Flavors`<sup>Required</sup> <a name="Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavors"></a>

```go
func Flavors() DataOpentelekomcloudDmsFlavorV2FlavorsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList">DataOpentelekomcloudDmsFlavorV2FlavorsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.versions"></a>

```go
func Versions() *[]*string
```

- *Type:* *[]*string

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archTypeInput"></a>

```go
func ArchTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChargingModeInput`<sup>Optional</sup> <a name="ChargingModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingModeInput"></a>

```go
func ChargingModeInput() *string
```

- *Type:* *string

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorIdInput"></a>

```go
func FlavorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StorageSpecCodeInput`<sup>Optional</sup> <a name="StorageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCodeInput"></a>

```go
func StorageSpecCodeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.chargingMode"></a>

```go
func ChargingMode() *string
```

- *Type:* *string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.flavorId"></a>

```go
func FlavorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.storageSpecCode"></a>

```go
func StorageSpecCode() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDmsFlavorV2Config <a name="DataOpentelekomcloudDmsFlavorV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

&dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArchType: *string,
	AvailabilityZones: *[]*string,
	ChargingMode: *string,
	FlavorId: *string,
	Id: *string,
	StorageSpecCode: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.archType">ArchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#arch_type DataOpentelekomcloudDmsFlavorV2#arch_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#availability_zones DataOpentelekomcloudDmsFlavorV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.chargingMode">ChargingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#charging_mode DataOpentelekomcloudDmsFlavorV2#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.flavorId">FlavorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#flavor_id DataOpentelekomcloudDmsFlavorV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#id DataOpentelekomcloudDmsFlavorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#storage_spec_code DataOpentelekomcloudDmsFlavorV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#type DataOpentelekomcloudDmsFlavorV2#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchType`<sup>Optional</sup> <a name="ArchType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.archType"></a>

```go
ArchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#arch_type DataOpentelekomcloudDmsFlavorV2#arch_type}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#availability_zones DataOpentelekomcloudDmsFlavorV2#availability_zones}.

---

##### `ChargingMode`<sup>Optional</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.chargingMode"></a>

```go
ChargingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#charging_mode DataOpentelekomcloudDmsFlavorV2#charging_mode}.

---

##### `FlavorId`<sup>Optional</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.flavorId"></a>

```go
FlavorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#flavor_id DataOpentelekomcloudDmsFlavorV2#flavor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#id DataOpentelekomcloudDmsFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageSpecCode`<sup>Optional</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.storageSpecCode"></a>

```go
StorageSpecCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#storage_spec_code DataOpentelekomcloudDmsFlavorV2#storage_spec_code}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/dms_flavor_v2#type DataOpentelekomcloudDmsFlavorV2#type}.

---

### DataOpentelekomcloudDmsFlavorV2Flavors <a name="DataOpentelekomcloudDmsFlavorV2Flavors" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

&dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2Flavors {

}
```


### DataOpentelekomcloudDmsFlavorV2FlavorsIos <a name="DataOpentelekomcloudDmsFlavorV2FlavorsIos" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

&dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2FlavorsIos {

}
```


### DataOpentelekomcloudDmsFlavorV2FlavorsProperties <a name="DataOpentelekomcloudDmsFlavorV2FlavorsProperties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

&dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties {

}
```


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

&dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures {

}
```


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

&dataopentelekomclouddmsflavorv2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDmsFlavorV2FlavorsIosList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsIosList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsIosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsIosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.unavailabilityZones">UnavailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos">DataOpentelekomcloudDmsFlavorV2FlavorsIos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.storageSpecCode"></a>

```go
func StorageSpecCode() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UnavailabilityZones`<sup>Required</sup> <a name="UnavailabilityZones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.unavailabilityZones"></a>

```go
func UnavailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudDmsFlavorV2FlavorsIos
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIos">DataOpentelekomcloudDmsFlavorV2FlavorsIos</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.archTypes">ArchTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.chargingModes">ChargingModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList">DataOpentelekomcloudDmsFlavorV2FlavorsIosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.supportFeatures">SupportFeatures</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.vmSpecification">VmSpecification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors">DataOpentelekomcloudDmsFlavorV2Flavors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchTypes`<sup>Required</sup> <a name="ArchTypes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.archTypes"></a>

```go
func ArchTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ChargingModes`<sup>Required</sup> <a name="ChargingModes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.chargingModes"></a>

```go
func ChargingModes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.ios"></a>

```go
func Ios() DataOpentelekomcloudDmsFlavorV2FlavorsIosList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsIosList">DataOpentelekomcloudDmsFlavorV2FlavorsIosList</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.properties"></a>

```go
func Properties() DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList</a>

---

##### `SupportFeatures`<sup>Required</sup> <a name="SupportFeatures" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.supportFeatures"></a>

```go
func SupportFeatures() DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VmSpecification`<sup>Required</sup> <a name="VmSpecification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.vmSpecification"></a>

```go
func VmSpecification() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudDmsFlavorV2Flavors
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2Flavors">DataOpentelekomcloudDmsFlavorV2Flavors</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.flavorAlias">FlavorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBandwidthPerBroker">MaxBandwidthPerBroker</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBroker">MaxBroker</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxConsumerPerBroker">MaxConsumerPerBroker</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxPartitionPerBroker">MaxPartitionPerBroker</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxStoragePerNode">MaxStoragePerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxTpsPerBroker">MaxTpsPerBroker</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minBroker">MinBroker</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minStoragePerNode">MinStoragePerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties">DataOpentelekomcloudDmsFlavorV2FlavorsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlavorAlias`<sup>Required</sup> <a name="FlavorAlias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.flavorAlias"></a>

```go
func FlavorAlias() *string
```

- *Type:* *string

---

##### `MaxBandwidthPerBroker`<sup>Required</sup> <a name="MaxBandwidthPerBroker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBandwidthPerBroker"></a>

```go
func MaxBandwidthPerBroker() *f64
```

- *Type:* *f64

---

##### `MaxBroker`<sup>Required</sup> <a name="MaxBroker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxBroker"></a>

```go
func MaxBroker() *f64
```

- *Type:* *f64

---

##### `MaxConsumerPerBroker`<sup>Required</sup> <a name="MaxConsumerPerBroker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxConsumerPerBroker"></a>

```go
func MaxConsumerPerBroker() *f64
```

- *Type:* *f64

---

##### `MaxPartitionPerBroker`<sup>Required</sup> <a name="MaxPartitionPerBroker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxPartitionPerBroker"></a>

```go
func MaxPartitionPerBroker() *f64
```

- *Type:* *f64

---

##### `MaxStoragePerNode`<sup>Required</sup> <a name="MaxStoragePerNode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxStoragePerNode"></a>

```go
func MaxStoragePerNode() *f64
```

- *Type:* *f64

---

##### `MaxTpsPerBroker`<sup>Required</sup> <a name="MaxTpsPerBroker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.maxTpsPerBroker"></a>

```go
func MaxTpsPerBroker() *f64
```

- *Type:* *f64

---

##### `MinBroker`<sup>Required</sup> <a name="MinBroker" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minBroker"></a>

```go
func MinBroker() *f64
```

- *Type:* *f64

---

##### `MinStoragePerNode`<sup>Required</sup> <a name="MinStoragePerNode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.minStoragePerNode"></a>

```go
func MinStoragePerNode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudDmsFlavorV2FlavorsProperties
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsProperties">DataOpentelekomcloudDmsFlavorV2FlavorsProperties</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.properties"></a>

```go
func Properties() DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeatures</a>

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference <a name="DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsflavorv2"

dataopentelekomclouddmsflavorv2.NewDataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxNode">MaxNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxTask">MaxTask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minNode">MinNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minTask">MinTask</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNode`<sup>Required</sup> <a name="MaxNode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxNode"></a>

```go
func MaxNode() *f64
```

- *Type:* *f64

---

##### `MaxTask`<sup>Required</sup> <a name="MaxTask" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.maxTask"></a>

```go
func MaxTask() *f64
```

- *Type:* *f64

---

##### `MinNode`<sup>Required</sup> <a name="MinNode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minNode"></a>

```go
func MinNode() *f64
```

- *Type:* *f64

---

##### `MinTask`<sup>Required</sup> <a name="MinTask" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.minTask"></a>

```go
func MinTask() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsFlavorV2.DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties">DataOpentelekomcloudDmsFlavorV2FlavorsSupportFeaturesProperties</a>

---



