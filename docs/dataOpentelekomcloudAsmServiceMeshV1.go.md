# `dataOpentelekomcloudAsmServiceMeshV1` Submodule <a name="`dataOpentelekomcloudAsmServiceMeshV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudAsmServiceMeshV1 <a name="DataOpentelekomcloudAsmServiceMeshV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1(scope Construct, id *string, config DataOpentelekomcloudAsmServiceMeshV1Config) DataOpentelekomcloudAsmServiceMeshV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config">DataOpentelekomcloudAsmServiceMeshV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config">DataOpentelekomcloudAsmServiceMeshV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudAsmServiceMeshV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudAsmServiceMeshV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudAsmServiceMeshV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudAsmServiceMeshV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudAsmServiceMeshV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.serviceMeshes">ServiceMeshes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ServiceMeshes`<sup>Required</sup> <a name="ServiceMeshes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.serviceMeshes"></a>

```go
func ServiceMeshes() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudAsmServiceMeshV1Config <a name="DataOpentelekomcloudAsmServiceMeshV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

&dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/asm_service_mesh_v1#id DataOpentelekomcloudAsmServiceMeshV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/asm_service_mesh_v1#id DataOpentelekomcloudAsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

&dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes {

}
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

&dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig {

}
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

&dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing {

}
```


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

&dataopentelekomcloudasmservicemeshv1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.clusterIds">ClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.ipv6Enable">Ipv6Enable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.telemetryConfigTracing">TelemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.clusterIds"></a>

```go
func ClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv6Enable`<sup>Required</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.ipv6Enable"></a>

```go
func Ipv6Enable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.proxyConfig"></a>

```go
func ProxyConfig() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TelemetryConfigTracing`<sup>Required</sup> <a name="TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.telemetryConfigTracing"></a>

```go
func TelemetryConfigTracing() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshes</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeInboundPorts">ExcludeInboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeIpRanges">ExcludeIpRanges</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeOutboundPorts">ExcludeOutboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeInboundPorts">IncludeInboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeIpRanges">IncludeIpRanges</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeOutboundPorts">IncludeOutboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInboundPorts`<sup>Required</sup> <a name="ExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeInboundPorts"></a>

```go
func ExcludeInboundPorts() *string
```

- *Type:* *string

---

##### `ExcludeIpRanges`<sup>Required</sup> <a name="ExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeIpRanges"></a>

```go
func ExcludeIpRanges() *string
```

- *Type:* *string

---

##### `ExcludeOutboundPorts`<sup>Required</sup> <a name="ExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.excludeOutboundPorts"></a>

```go
func ExcludeOutboundPorts() *string
```

- *Type:* *string

---

##### `IncludeInboundPorts`<sup>Required</sup> <a name="IncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeInboundPorts"></a>

```go
func IncludeInboundPorts() *string
```

- *Type:* *string

---

##### `IncludeIpRanges`<sup>Required</sup> <a name="IncludeIpRanges" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeIpRanges"></a>

```go
func IncludeIpRanges() *string
```

- *Type:* *string

---

##### `IncludeOutboundPorts`<sup>Required</sup> <a name="IncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.includeOutboundPorts"></a>

```go
func IncludeOutboundPorts() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesProxyConfig</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr">ZipkinServiceAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort">ZipkinServicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ZipkinServiceAddr`<sup>Required</sup> <a name="ZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr"></a>

```go
func ZipkinServiceAddr() *string
```

- *Type:* *string

---

##### `ZipkinServicePort`<sup>Required</sup> <a name="ZipkinServicePort" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort"></a>

```go
func ZipkinServicePort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProviders</a>

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference <a name="DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudasmservicemeshv1"

dataopentelekomcloudasmservicemeshv1.NewDataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.defaultProviders">DefaultProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.extensionProviders">ExtensionProviders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.randomSamplingPercentage">RandomSamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultProviders`<sup>Required</sup> <a name="DefaultProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.defaultProviders"></a>

```go
func DefaultProviders() *[]*string
```

- *Type:* *[]*string

---

##### `ExtensionProviders`<sup>Required</sup> <a name="ExtensionProviders" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.extensionProviders"></a>

```go
func ExtensionProviders() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingExtensionProvidersList</a>

---

##### `RandomSamplingPercentage`<sup>Required</sup> <a name="RandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.randomSamplingPercentage"></a>

```go
func RandomSamplingPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudAsmServiceMeshV1.DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing">DataOpentelekomcloudAsmServiceMeshV1ServiceMeshesTelemetryConfigTracing</a>

---



