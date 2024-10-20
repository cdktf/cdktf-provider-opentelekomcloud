# `dataOpentelekomcloudVpcRouteTablesV1` Submodule <a name="`dataOpentelekomcloudVpcRouteTablesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcRouteTablesV1 <a name="DataOpentelekomcloudVpcRouteTablesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1 opentelekomcloud_vpc_route_tables_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.NewDataOpentelekomcloudVpcRouteTablesV1(scope Construct, id *string, config DataOpentelekomcloudVpcRouteTablesV1Config) DataOpentelekomcloudVpcRouteTablesV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config">DataOpentelekomcloudVpcRouteTablesV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config">DataOpentelekomcloudVpcRouteTablesV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetId"></a>

```go
func ResetId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteTablesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.DataOpentelekomcloudVpcRouteTablesV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.DataOpentelekomcloudVpcRouteTablesV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.DataOpentelekomcloudVpcRouteTablesV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.DataOpentelekomcloudVpcRouteTablesV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudVpcRouteTablesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudVpcRouteTablesV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudVpcRouteTablesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudVpcRouteTablesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.routetables">Routetables</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Routetables`<sup>Required</sup> <a name="Routetables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.routetables"></a>

```go
func Routetables() DataOpentelekomcloudVpcRouteTablesV1RoutetablesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcRouteTablesV1Config <a name="DataOpentelekomcloudVpcRouteTablesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

&dataopentelekomcloudvpcroutetablesv1.DataOpentelekomcloudVpcRouteTablesV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	SubnetId: *string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1#id DataOpentelekomcloudVpcRouteTablesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1#subnet_id DataOpentelekomcloudVpcRouteTablesV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1#vpc_id DataOpentelekomcloudVpcRouteTablesV1#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1#id DataOpentelekomcloudVpcRouteTablesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1#subnet_id DataOpentelekomcloudVpcRouteTablesV1#subnet_id}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/data-sources/vpc_route_tables_v1#vpc_id DataOpentelekomcloudVpcRouteTablesV1#vpc_id}.

---

### DataOpentelekomcloudVpcRouteTablesV1Routetables <a name="DataOpentelekomcloudVpcRouteTablesV1Routetables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

&dataopentelekomcloudvpcroutetablesv1.DataOpentelekomcloudVpcRouteTablesV1Routetables {

}
```


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

&dataopentelekomcloudvpcroutetablesv1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudVpcRouteTablesV1RoutetablesList <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.NewDataOpentelekomcloudVpcRouteTablesV1RoutetablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudVpcRouteTablesV1RoutetablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.NewDataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables">DataOpentelekomcloudVpcRouteTablesV1Routetables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.routes"></a>

```go
func Routes() DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList</a>

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudVpcRouteTablesV1Routetables
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1Routetables">DataOpentelekomcloudVpcRouteTablesV1Routetables</a>

---


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.NewDataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference <a name="DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudvpcroutetablesv1"

dataopentelekomcloudvpcroutetablesv1.NewDataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.nexthop">Nexthop</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Nexthop`<sup>Required</sup> <a name="Nexthop" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.nexthop"></a>

```go
func Nexthop() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcRouteTablesV1.DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes">DataOpentelekomcloudVpcRouteTablesV1RoutetablesRoutes</a>

---



