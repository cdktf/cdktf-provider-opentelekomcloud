# `dataOpentelekomcloudTmsResourceTypesV1` Submodule <a name="`dataOpentelekomcloudTmsResourceTypesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTmsResourceTypesV1 <a name="DataOpentelekomcloudTmsResourceTypesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1 opentelekomcloud_tms_resource_types_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

dataopentelekomcloudtmsresourcetypesv1.NewDataOpentelekomcloudTmsResourceTypesV1(scope Construct, id *string, config DataOpentelekomcloudTmsResourceTypesV1Config) DataOpentelekomcloudTmsResourceTypesV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config">DataOpentelekomcloudTmsResourceTypesV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config">DataOpentelekomcloudTmsResourceTypesV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.resetServiceName"></a>

```go
func ResetServiceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTmsResourceTypesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

dataopentelekomcloudtmsresourcetypesv1.DataOpentelekomcloudTmsResourceTypesV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

dataopentelekomcloudtmsresourcetypesv1.DataOpentelekomcloudTmsResourceTypesV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

dataopentelekomcloudtmsresourcetypesv1.DataOpentelekomcloudTmsResourceTypesV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

dataopentelekomcloudtmsresourcetypesv1.DataOpentelekomcloudTmsResourceTypesV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudTmsResourceTypesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudTmsResourceTypesV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudTmsResourceTypesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTmsResourceTypesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.types">Types</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList">DataOpentelekomcloudTmsResourceTypesV1TypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.types"></a>

```go
func Types() DataOpentelekomcloudTmsResourceTypesV1TypesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList">DataOpentelekomcloudTmsResourceTypesV1TypesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTmsResourceTypesV1Config <a name="DataOpentelekomcloudTmsResourceTypesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

&dataopentelekomcloudtmsresourcetypesv1.DataOpentelekomcloudTmsResourceTypesV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Region: *string,
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1#id DataOpentelekomcloudTmsResourceTypesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1#region DataOpentelekomcloudTmsResourceTypesV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1#service_name DataOpentelekomcloudTmsResourceTypesV1#service_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1#id DataOpentelekomcloudTmsResourceTypesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1#region DataOpentelekomcloudTmsResourceTypesV1#region}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Config.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/tms_resource_types_v1#service_name DataOpentelekomcloudTmsResourceTypesV1#service_name}.

---

### DataOpentelekomcloudTmsResourceTypesV1Types <a name="DataOpentelekomcloudTmsResourceTypesV1Types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

&dataopentelekomcloudtmsresourcetypesv1.DataOpentelekomcloudTmsResourceTypesV1Types {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTmsResourceTypesV1TypesList <a name="DataOpentelekomcloudTmsResourceTypesV1TypesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

dataopentelekomcloudtmsresourcetypesv1.NewDataOpentelekomcloudTmsResourceTypesV1TypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudTmsResourceTypesV1TypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference <a name="DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudtmsresourcetypesv1"

dataopentelekomcloudtmsresourcetypesv1.NewDataOpentelekomcloudTmsResourceTypesV1TypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.isGlobal">IsGlobal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types">DataOpentelekomcloudTmsResourceTypesV1Types</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsGlobal`<sup>Required</sup> <a name="IsGlobal" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.isGlobal"></a>

```go
func IsGlobal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1TypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudTmsResourceTypesV1Types
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTmsResourceTypesV1.DataOpentelekomcloudTmsResourceTypesV1Types">DataOpentelekomcloudTmsResourceTypesV1Types</a>

---



